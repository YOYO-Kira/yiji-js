import React, { Component } from 'react'
import './tuijian.css'
import Bottom from '../Bottom/Bottom'
import ZhuyeHeader from '../Zhuye/ZhuyeHeader'
class Tuijian extends Component {
  state = {
    showListImg1: true
  }
  zhanClick = () => {
    this.setState({
      showListImg1: true
    })
  }
  wenClick = () => {
    this.setState({
      showListImg1: false
    })
  }
  render() {
    return (
      <div>
        <ZhuyeHeader />
        <div className="tuijian-main">
          <div className="tuijian-main-top">
            <span
              onClick={this.zhanClick}
              style={{
                color: this.state.showListImg1 ? '#fff' : '#000',
                background: this.state.showListImg1
                  ? 'linear-gradient(to right, #ce8d89, #d12a18)'
                  : '#c9c9c9'
              }}
            >
              展
            </span>
            <span
              onClick={this.wenClick}
              style={{
                color: this.state.showListImg1 ? '#000' : '#fff',
                background: this.state.showListImg1
                  ? '#c9c9c9'
                  : 'linear-gradient(to right, #ce8d89, #d12a18)'
              }}
            >
              文
            </span>
          </div>
          <div
            className="tuijian-main-section"
            style={{
              marginLeft: this.state.showListImg1 ? 0 : '-100vw'
            }}
          >
            <div className="main-one">
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_01.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_02.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_03.png"
                  alt=""
                />
              </div>
            </div>
            <div className="main-two">
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_04.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_05.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/tuijian_06.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}

export default Tuijian
