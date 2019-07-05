import React,{Component}from 'react'
import {Card,Button} from 'antd'
import './ui.less'
export default class Buttonss extends Component {
  state= {
    isloading:true
  }
  handlecloseLoading=()=>{
    this.setState({
      isloading:false
    })
  }
  handleOpenLoading=()=>{
    this.setState({
      isloading:true
    })
  }
  render(){
    const {isloading} = this.state
    return(
      <div>
        <Card title="基础组件-按钮">
          <Button type="primary">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button disabled>Imooc</Button>  
        </Card>
        <Card title="基础组件-图形按钮">
          <Button type="primary" icon="plus">Imooc</Button>
          <Button type="danger" icon="search">Imooc</Button>
          <Button icon="close">Imooc</Button>
          <Button type="dashed" icon="redo">Imooc</Button>
          <Button disabled icon="copy">Imooc</Button>
               <Button shape="circle" icon="search" type="primary" />
        </Card>
        <Card title="基础组件-loading按钮">
           <Button type="primary" loading={isloading}>确定</Button>
           <Button >取消</Button>
           <Button shape="circle" icon="search" loading={isloading} />
           <Button type="primary" onClick={this.handleOpenLoading}>开启</Button>
           <Button type="primary" onClick={this.handlecloseLoading}>关闭</Button>
        </Card>
        
      </div>
    )
  }
}