import React, { Component } from 'react'
import './bottom.css'
import { HashRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
class Bottom extends Component {
  state = {}
  render() {
    return (
      <div className="zhuye-bottom">
        <Router>
          <NavLink to="/zhuye" activeClassName="active">
            <span className="iconfont icon-zixun" />
            <p>展讯</p>
          </NavLink>
          <NavLink to="/tuijian">
            <span className="iconfont icon-icon_tuijian-xian" />
            <p>推荐</p>
          </NavLink>
          <NavLink to="/fabu">
            <span className="iconfont icon-fabu" />
            <p>发布</p>
          </NavLink>
          <NavLink to="/geren">
            <span className="iconfont icon-geren" />
            <p>个人</p>
          </NavLink>
        </Router>
      </div>
    )
  }
}

export default Bottom
