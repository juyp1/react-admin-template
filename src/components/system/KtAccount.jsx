import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message
} from 'antd'

import BreadcrumbCustom from '../BreadcrumbCustom'
class KtAccount extends Component {
  constructor(props) {
    super(props)
    this.setState({
      results: props.addresult
    })
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    results: ''
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.addresult !== '') {
      if (nextProps.addresult === 'success') {
        message.success('开户成功')
      } else {
        message.error('开户失败')
      }
    
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.useradd(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 8 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 6
        },
        sm: {
          span: 16,
          offset: 11
        }
      }
    }
    return (
      <div>
        <div>
          <BreadcrumbCustom first="系统设置" second="开通账号" />
        </div>
        <div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请输入用户名'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="真实姓名">
              {getFieldDecorator('relname', {
                rules: [
                  {
                    required: true,
                    message: '请输入真实姓名'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码'
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
              <Button>取消</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const mapState = state => ({
  addresult: state.getIn(['user', 'result'])
})
const mapDispatch = dispatch => ({
  useradd(params) {
    dispatch(actionCreators.AddAccount(params))
  }
})
 
KtAccount = Form.create({ name: 'register' })(KtAccount)
export default connect(
  mapState,
  mapDispatch
)(KtAccount)
