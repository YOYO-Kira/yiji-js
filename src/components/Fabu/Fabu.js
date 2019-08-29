import React, { Component } from 'react'
import './fabu.css'
import Bottom from '../Bottom/Bottom'
class Fabu extends Component {
  state = {}
  render() {
    return (
      <div className="fabu-wrap">
        <div className="fabu-header">
          <h4>上传图片</h4>
          <span className="iconfont icon-fabu" />
        </div>
        <div className="fabu-main">
          <span>说点什么吧</span>
        </div>
        <Bottom />
      </div>
    )
  }
}

export default Fabu
