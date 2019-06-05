import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Table, Pagination, Input,Row, Col,Button } from 'antd'
import BreadcrumbCustom from '../BreadcrumbCustom'
import './users.less'
class Users extends PureComponent {
  state = {
    params: {
      pageNum: 1,
      pageSize: 2,
      keywords: ''
    },
    pageination: {
      current: 1,
      total: 0
    }
  }
  componentWillMount() {
    this.props.userlist(this.state.params)
  }

  componentWillReceiveProps(nextProp) {
    const pagination = { ...this.state.pagination }
    pagination.total = nextProp.userstotal
    this.setState({
      pagination
    })
  }
  handlePageNum =(page, pageSize)=>{
    const params = { ...this.state.params }
    params.pageNum = page
    this.setState({
      params
    },()=>{
      this.props.userlist(this.state.params)
    })
   
    
  }
  render() {
    const columns = [
      {
        title: '#',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },

      {
        title: '真实姓名',
        dataIndex: 'relname',
        key: 'relname'
      },
      {
        title: '创建时间',
        dataIndex: 'createtime',
        key: 'createtime'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: text => <span>{text === 1 ? '正常' : '禁用'}</span>
      }
    ]
    const { listresult, userstotal } = this.props

    return (
      <div>
        <div>
          <BreadcrumbCustom first="系统设置" second="账号管理" />
        </div>
       <Row gutter={16}>
          <Col span={4}>
            <Input placeholder="请输入关键字" /> 
          </Col>
          <Col span={4}>
          <Button type="primary" icon="search">
           搜索
          </Button>
          </Col>
       </Row>
        <div className="tables">
          <Table
            columns={columns}
            dataSource={listresult.size === 0 ? [] : listresult}
            rowKey="id"
            pagination={false}
            
          />
        </div>
        <Row gutter={16}>
          
          <Col span={16} offset={20}>
            <div>
              <Pagination
                defaultCurrent={1}
                total={userstotal}
                pageSize={2}
                hideOnSinglePage
                onChange={this.handlePageNum}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapState = state => ({
  listresult: state.getIn(['user', 'listresult']),
  userstotal: state.getIn(['user', 'userstotal'])
})
const mapDispatch = dispatch => ({
  userlist(params) {
    dispatch(actionCreators.getUserList(params))
  }
})
export default connect(
  mapState,
  mapDispatch
)(Users)
