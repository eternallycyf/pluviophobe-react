import React, { ChangeEvent, FC, KeyboardEvent, ReactElement, useEffect, useRef, useState } from 'react'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon'
import Transition from '../Transition/transition'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject { value: string; }
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions?: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

// 按 esc 退出 按 enter 选中
// 点击选中 点击其他区域关闭菜单
// 防抖
const AutoComplete: FC<AutoCompleteProps> = (props) => {

  const {
    fetchSuggestions = () => [],
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const useDebounceValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => { setSuggestions([]) })

  useEffect(() => {
    if (useDebounceValue && triggerSearch.current) {
      const results = fetchSuggestions(useDebounceValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [useDebounceValue, fetchSuggestions])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:
        highlight(highlightIndex - 1)
        break
      case 40:
        highlight(highlightIndex + 1)
        break
      case 27:
        setShowDropdown(false)
        break
      default:
        break
    }
  }

  const renderTemplate = (item: DataSourceType) => renderOption ? renderOption(item) : item.value

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    onSelect && onSelect(item)
    triggerSearch.current = false
  }

  const generateDropdown = () => (
    <Transition
      in={showDropdown || loading}
      animation="zoom-in-top"
      timeout={300}
      onExited={() => { setSuggestions([]) }}
    >
      <ul className="pl-suggestion-list">
        {
          suggestions.map((item, index) => {
            const cnames = `suggestion-item ${index === highlightIndex && 'is-active'}`
            return (
              <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })
        }
      </ul>
    </Transition>
  )


  return (
    <>
      <div className={'pl-auto-complete'} ref={componentRef}>
        <Input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
        {loading &&
          <div className="suggstions-loading-icon">
            <Icon icon="spinner" size='6x' spin />
          </div>
        }
        {suggestions.length > 0 && generateDropdown()}
      </div>
    </>
  )
}

export default AutoComplete
