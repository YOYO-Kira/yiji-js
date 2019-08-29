import React, { Component } from 'react'
import './ZhuyeHeader.css'
class ZhuyeHeader extends Component {
  state = {
    showSearch: true
  }
  openSearch = () => {
    this.setState({
      showSearch: false
    })
  }
  exitSearch = () => {
    this.setState({
      showSearch: true
    })
  }
  render() {
    return (
      <div>
        <div className="zhuyeheader">
          <img
            src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/logo_01.jpg"
            alt=""
          />
          <span
            className="iconfont icon-fangdajing"
            onClick={this.openSearch}
          ></span>
        </div>
        <div
          className="zhuyesearch"
          style={{
            left: this.state.showSearch ? '100%' : '0'
          }}
        >
          <span
            className="iconfont icon-guanbi"
            onClick={this.exitSearch}
          ></span>
        </div>
      </div>
    )
  }
}

export default ZhuyeHeader
