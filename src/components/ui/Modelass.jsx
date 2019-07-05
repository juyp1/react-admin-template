import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
export default class Modelass extends Component {
  state = {
    showmodel1: false,
    showmodel2: false,
    showmodel3: false,
    showmodel4: false,
    loading:false 
  }
  handleOpen = type => {
    this.setState({
      [type]: true
    })
  }
  handleClose = (type) => {
    this.setState({
      [type]: false
    })
  }
  handleOk=()=>{
    this.setState({
      loading:true
    })
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1000);
  }
  handleinfo = () =>{
    Modal.confirm({
      title:"学习react?",
      content:"你真的会react吗",
      onOK(){
        console.log('嗯学会了')
      },
      onCancel(){
        console.log('俺没学会')
      }
    })
  }
  handlesuccess = () =>{
    Modal.success({
      title:"操作提示",
      content:"保存成功",
      okText:"确定"
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button onClick={() => this.handleOpen('showmodel1')}>模态框1</Button>
          <Button onClick={() => this.handleOpen('showmodel2')}>自定义页脚</Button>
          <Button onClick={() => this.handleOpen('showmodel3')}>顶部20</Button>
          <Button onClick={() => this.handleOpen('showmodel4')}>垂直居中</Button>
        </Card>
        <Card title="信息确认框">
        <Button onClick={this.handleinfo}>询问</Button>
        <Button onClick={this.handlesuccess}>成功</Button>
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.showmodel1}
          onCancel={()=>this.handleClose('showmodel1')}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          visible={this.state.showmodel2}
          title="自定义页脚"
          onCancel={()=>this.handleClose('showmodel2')}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Submit
            </Button>

          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Modal
          visible={this.state.showmodel3}
          title="距离顶部20"
          style={{top:20}}
          onCancel={()=>this.handleClose('showmodel3')}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="垂直居中"
          centered
          visible={this.state.showmodel4}
          onOk={() => this.handleOk}
          onCancel={()=>this.handleClose('showmodel4')}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}
