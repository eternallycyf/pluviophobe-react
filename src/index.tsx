import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'
import './styles/index.scss'
import Alert from "./components/Alert";
import { Menu, MenuItem, SubMenu } from './components/Menu'
import { Tabs, TabItem } from './components/Tabs'

ReactDOM.render(
  <React.StrictMode>
    <Button disabled={false} >ss</Button>
    <Alert type={'warning'} message={'这是标题'} description={<><span>asd</span><span style={{ color: 'red' }}>sds</span> </>} />
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
    <Tabs mode={'card'} defaultIndex={'2'} onSelect={(index) => console.log(index)}>
      <TabItem label={'1'}><h1>sd</h1></TabItem>
      <TabItem disabled label={'2'}>2内容</TabItem>
      <TabItem label={<span style={{ color: 'red' }}>span3</span>}>3内容</TabItem>
    </Tabs>
  </React.StrictMode >,
  document.getElementById('root')
);


