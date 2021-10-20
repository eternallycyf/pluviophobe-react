import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'
import './styles/index.scss'
import Alert from "./components/Alert";
import Icon from './components/Icon'
import { Menu, MenuItem, SubMenu } from './components/Menu'
import { Tabs, TabItem } from './components/Tabs'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Input from './components/Input'
library.add(fas)
ReactDOM.render(
  <>
    <h1>Button 组件</h1>
    <Button disabled={false} type={'danger'} style={{ borderRadius: '10px' }} >
      <Icon theme={'light'} size='2x' icon='times' />
    </Button>
    <h1>Alert 组件</h1>
    <Alert message={'这是标题'} type={'info'} description={<><span>这是内容</span><span style={{ color: 'red' }}>sds</span> </>} />
    <h1>Menu 组件</h1>
    <Menu defaultOpenSubMenus={['1', '2']} mode={'horizontal'} defaultIndex={'2'} onSelect={(index) => console.log(index)}>
      <SubMenu title='dropdown'>
        <MenuItem >3</MenuItem>
        <MenuItem >hgks</MenuItem>
        <MenuItem >2</MenuItem>
      </SubMenu>
      <SubMenu title='dropdown'>
        <MenuItem >3</MenuItem>
        <MenuItem >hgks</MenuItem>
        <MenuItem >2</MenuItem>
      </SubMenu>
      <MenuItem >hgks</MenuItem>
      <MenuItem >2</MenuItem>
      <SubMenu title='dropdown'>
        <MenuItem >
          <h1>sfa</h1>
        </MenuItem>
        <MenuItem >hgks</MenuItem>
        <MenuItem >2</MenuItem>
      </SubMenu>
    </Menu>
    <h1>Tab 组件</h1>
    <Tabs mode={'card'} defaultIndex={'2'} onSelect={(index) => console.log(index)}>
      <TabItem label={'1'}><h1>sd</h1></TabItem>
      <TabItem disabled label={'2'}>2内容</TabItem>
      <TabItem label={<span style={{ color: 'red' }}>span3</span>}>3内容</TabItem>
    </Tabs>
    <h1>Icon 组件</h1>
    <Icon theme={'primary'} size='10x' icon='coffee' />
    <h1>Input 组件</h1>
    <Input icon={'calendar-alt'} onChange={(e) => console.log(e.target.value)} prepend={'saf'} />
    <h1>Auto Complete组件</h1>
  </ >,
  document.getElementById('root')
);


