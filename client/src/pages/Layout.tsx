import { Layout, Menu } from "antd"
import React from "react"
import { NavLink, Route } from "react-router-dom"
import Home from "./Home"
import AddMovie from "./movie/AddMovie"
import EditMovie from "./movie/EditMovie"
import MovieList from "./movie/MovieList"

const { Header, Sider, Content } = Layout;

const _Layout: React.FC = function () {
  return (
    <div className="container">
      <Layout>
        <Sider>
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1">
              <NavLink to="/">首页</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/movie">电影列表</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/movie/add">添加电影</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/movie/edit/234">编辑电影</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <NavLink to="/">猫眼电影管理系统</NavLink>
          </Header>
          <Content>
            <div className="main">
              <Route path="/" component={Home} exact></Route>
              <Route path="/movie" component={MovieList} exact></Route>
              <Route path="/movie/add" component={AddMovie}></Route>
              <Route path="/movie/edit/:id" component={EditMovie}></Route>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default _Layout