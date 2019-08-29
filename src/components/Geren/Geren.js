import React, { Component } from 'react'
import './geren.css'
import Bottom from '../Bottom/Bottom'
class Geren extends Component {
  state = {
    showListImg1: true,
    showList2: false,
    showGeren: false
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
  shezhiClick = () => {
    this.setState({
      showList2: true
    })
  }
  gerenClick = () => {
    this.setState({
      showGeren: true
    })
  }
  backClick = () => {
    this.setState({
      showList2: false,
      showGeren: false
    })
  }
  render() {
    return (
      <div className="geren-wrap">
        <div className="geren-ye">
          <div className="geren-header">
            <div>
              <span
                className="iconfont icon-icon-setting"
                onClick={this.shezhiClick}
              ></span>
            </div>
            <img
              onClick={this.gerenClick}
              src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_02.png"
              alt=""
            />
            <h4>阴雨天</h4>
            <div>
              <div>
                <p>关注</p>
                <span>11</span>
              </div>
              <div>
                <p>发布</p>
                <span>9</span>
              </div>
              <div>
                <p>访客</p>
                <span>49</span>
              </div>
            </div>
          </div>
          <div className="geren-banner">
            <div>
              <h3>艺象云集</h3>
              <a href="https://www.baidu.com">All>></a>
            </div>
            <div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_07.png"
                  alt=""
                />
                <span>订阅/9</span>
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_08.png"
                  alt=""
                />
                <span>订阅/7</span>
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_09.png"
                  alt=""
                />
                <span>订阅/19</span>
              </div>
            </div>
          </div>
          <div className="geren-main">
            <div className="geren-main-top">
              <span
                onClick={this.zhanClick}
                style={{
                  color: this.state.showListImg1 ? '#fff' : '#000',
                  background: this.state.showListImg1
                    ? 'linear-gradient(to right, #ce8d89, #d12a18)'
                    : '#c9c9c9'
                }}
              >
                原创
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
                缓存
              </span>
            </div>
            <div
              className="geren-main-section"
              style={{
                marginLeft: this.state.showListImg1 ? 0 : '-100vw'
              }}
            >
              <div className="main-one">
                <div>
                  <img
                    src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_04.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_05.png"
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
              </div>
              <div>
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_09.png"
                  alt=""
                />
                <span>订阅/17</span>
              </div>
            </div>
            <Bottom />
          </div>
        </div>
        <div
          className="geren-shezhi"
          style={{
            left: this.state.showList2 ? '0' : '100%'
          }}
        >
          <div>
            <div className="shezhi-header">
              <span
                className="iconfont icon-2fanhui"
                onClick={this.backClick}
              ></span>
              <img
                src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/logo_01.jpg"
                alt=""
              />
            </div>
            <div className="shezhi-mainone">
              <div>
                <div>
                  <span>自动离线缓存</span>
                </div>
                <div>
                  <span>开/关</span>
                </div>
              </div>
              <div>
                <div>
                  <span>wifi状态下自动缓存高清作品</span>
                </div>
                <div>
                  <span
                    className="iconfont icon-qianjin"
                    onClick={this.backClick}
                  ></span>
                </div>
              </div>
              <div>
                <div>
                  <span>使用流量状态下提醒</span>
                </div>
                <div>
                  <span>开/关</span>
                </div>
              </div>
            </div>
            <div className="shezhi-mainone">
              <div>
                <div>
                  <span>消息推送</span>
                </div>
              </div>
              <div>
                <div>
                  <span>意见反馈</span>
                </div>
              </div>
              <div>
                <div>
                  <span>使用版本</span>
                </div>
              </div>
              <div>
                <div>
                  <span>关于艺集</span>
                </div>
              </div>
            </div>
            <div className="shezhi-footer">
              <a href="https://www.baidu.com">退出登录</a>
              <span>当前版本08.28.10.20</span>
            </div>
          </div>
        </div>
        <div
          className="geren-xinxi"
          style={{
            left: this.state.showGeren ? '0' : '100%'
          }}
        >
          <div>
            <div className="xinxi-header">
              <span
                className="iconfont icon-2fanhui"
                onClick={this.backClick}
              ></span>
              <img
                src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/logo_01.jpg"
                alt=""
              />
            </div>
            <div className="xinxi-mainone">
              <div>
                <div>
                  <span>头像</span>
                </div>
                <div>
                  <img
                    src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/User_02.png"
                    alt=""
                  />
                  <span className="iconfont icon-qianjin"></span>
                </div>
              </div>
              <div>
                <div>
                  <span>背景</span>
                </div>
                <div>
                  <span>更换</span>
                  <span className="iconfont icon-qianjin"></span>
                </div>
              </div>
              <div>
                <div>
                  <span>名字</span>
                </div>
                <div>
                  <span>阴雨天</span>
                  <span
                    className="iconfont icon-qianjin"
                    onClick={this.backClick}
                  ></span>
                </div>
              </div>
            </div>
            <div className="xinxi-mainone">
              <div>
                <div>
                  <span>我的二维码</span>
                </div>
              </div>
              <div>
                <div>
                  <span>我的地址</span>
                </div>
              </div>
              <div>
                <div>
                  <span>隐私</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Geren
