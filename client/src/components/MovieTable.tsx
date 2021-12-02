import React from 'react'
import { IMovieState } from '../redux/reducers/MovieReducer'
import { Table, Image, Switch, Button, Popconfirm, Input,  } from 'antd'
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table'
import { IMovie } from '../services/MovieService'
import { SwitchType } from '../services/CommonTypes'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';

// interface IMovieTableProps extends IMovieState {
//   /**
//    * 完成加载之后的事件
//    */
//   onLoad: () => void
// }
export interface IMovieTableEvents {
  /**
   * 完成加载之后的事件
   */
  onLoad: () => void
  onSwitchChange: (type: SwitchType, newState: boolean, id: string) => void
  onDelete: (id: string) => Promise<void>
  onPageChange: (newPage: number) => void
  onKeyChange: (key: string) => void
  onSearch: () => void
}
export default class extends React.Component<IMovieTableEvents & IMovieState> {

  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  private handleSearch() {
    this.props.onSearch()
  }
  private getFilterDropDown() {
    return (
      <div style={{padding: 8}}>
        <Input 
          style={{width: 188,marginBottom: 8,display: 'block'}}
          value={this.props.condition.key}
          onChange={e => this.props.onKeyChange(e.target.value)}
          onPressEnter={() => this.handleSearch()}
        />
        <Button
          type="primary"
          size="small"
          style={{width: 90, marginRight: 8}}
          onClick={() => this.handleSearch()}>
            搜索
          </Button>
          <Button
          size="small"
          style={{width: 90}}
          onClick={() => {
            this.props.onKeyChange("")
            this.handleSearch()
          }}>
            重置
          </Button>
      </div>
    )
  }

  private getColumns(): ColumnProps<IMovie>[] {
    return [
      {
        title: "封面",
        dataIndex: "poster",
        render: (src) => {
          if (src) {
            return (<Image
              width={50}
              height={50}
              src={src}
            />
            )
          } else {
            return (
              <Image
                width={50}
                height={50}
                src="error"
                fallback="data:image/png;base64,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"
              />
            )
          }
        }
      },
      { 
        title: "名称", 
        dataIndex: "name",
        filterDropdown: this.getFilterDropDown.bind(this),
        filterIcon: <SearchOutlined />
      },
      {
        title: "地区",
        dataIndex: "areas",
        render: (text: string[]) => text.join(', ')
      },
      {
        title: "类型",
        dataIndex: "types",
        render: (text: string[]) => text.join(', ')
      },
      {
        title: "时长",
        dataIndex: "timeLong",
        render: timeLong => timeLong + '分钟'
      },
      {
        title: "正在热映",
        dataIndex: "isHot",
        render: (change, record) => {
          return (
            <Switch checked={change} onChange={(newVal) => {
              this.props.onSwitchChange(SwitchType.isHot, newVal, record._id!)
            }} />
          )
        }
      },
      {
        title: "即将上映",
        dataIndex: "isComing",
        render: (change, record) => {
          return (
            <Switch checked={change} onChange={(newVal) => {
              this.props.onSwitchChange(SwitchType.isComing, newVal, record._id!)
            }} />
          )
        }
      },
      {
        title: "经典影片",
        dataIndex: "isClassic",
        render: (change, record) => {
          return (
            <Switch checked={change} onChange={(newVal) => {
              this.props.onSwitchChange(SwitchType.isClassic, newVal, record._id!)
            }} />
          )
        }
      },
      { title: "票房", dataIndex: "boxOffice" },
      {
        title: "操作",
        dataIndex: "_id",
        render: (id: string) => {
          return (
            <div>
              <NavLink to={'/movie/edit/' + id}>
                <Button type="primary">编辑</Button>
              </NavLink>
              <Popconfirm title="确定要删除？" onConfirm={
                () => {
                  this.props.onDelete(id)
                }
              } okText="确定" cancelText="取消">
                <Button type="default">删除</Button>
              </Popconfirm>
            </div >
          )
        }
      },
    ]
  }

  getPageConfig(): TablePaginationConfig | false {
    if (!this.props.total) return false
    return {
      current: this.props.condition.page,
      pageSize: this.props.condition.limit,
      total: this.props.total
    }
  }

  handleChange(pagination: TablePaginationConfig) {
    this.props.onPageChange(pagination.current!)
  }

  render() {
    return (
      <Table
        rowKey="_id"
        dataSource={this.props.data}
        columns={this.getColumns()}
        loading={ this.props.isLoading }
        pagination={this.getPageConfig()}
        onChange={ this.handleChange.bind(this) }
      />
    )
  }
}