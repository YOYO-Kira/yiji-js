import React, { Component } from 'react'
import './Topic.css'
import { HashRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
class Topic extends Component {
  state = {
    topicXin: true,
    topicMap: true,
    topicShare: true,
    topicLun: true
  }
  xinClick = () => {
    this.setState({
      topicXin: !this.state.topicXin
    })
    console.log(111)
  }
  daoClick = () => {
    this.setState({
      topicMap: false
    })
  }
  shareClick = () => {
    this.setState({
      topicShare: false
    })
  }
  lunClick = () => {
    this.setState({
      topicLun: false
    })
  }
  fanClick = () => {
    this.setState({
      topicMap: true,
      topicShare: true,
      topicLun: true
    })
  }
  render() {
    return (
      <Router className="topic-wrap">
        <div className="topic-main">
          <div className="topic-head">
            <img
              src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/topic_bg.jpg"
              alt=""
            />
            <NavLink to="/zhuye">
              <span className="iconfont icon-2fanhui"></span>
            </NavLink>
          </div>
          <div className="topic-footer">
            <div>
              <span onClick={this.xinClick}>
                <span
                  style={{
                    color: this.state.topicXin ? '#fff' : 'red'
                  }}
                  className="iconfont icon-guanzhu"
                ></span>
                关注
              </span>
            </div>
            <div>
              <span onClick={this.daoClick}>
                <span className="iconfont icon-weizhi"></span>到这
              </span>
            </div>
            <div>
              <span onClick={this.shareClick}>
                <span className="iconfont icon-fenxiang-"></span>分享
              </span>
            </div>
            <div>
              <span onClick={this.lunClick}>
                <span className="iconfont icon-pinglun"></span>评论
              </span>
            </div>
          </div>
        </div>
        <div
          className="topic-map"
          style={{
            left: this.state.topicMap ? '100%' : '0'
          }}
        >
          <span
            onClick={this.fanClick}
            // className="iconfont icon-2fanhui"
          ></span>
        </div>
        <div
          className="topic-share"
          style={{
            top: this.state.topicShare ? '100%' : '68%'
          }}
        >
          <span onClick={this.fanClick}>取消</span>
        </div>
        <div
          className="topic-lun"
          style={{
            left: this.state.topicLun ? '100%' : '0'
          }}
        >
          <span onClick={this.fanClick}></span>
        </div>
        <div
          className="topic-zhezhao"
          style={{
            top: this.state.topicShare ? '100%' : '0'
          }}
        ></div>
      </Router>
    )
  }
}

export default Topic
