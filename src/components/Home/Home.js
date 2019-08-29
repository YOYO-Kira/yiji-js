import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './index.css'
import './home.css'
import { HashRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
class Home extends Component {
  state = {}
  componentDidMount() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1
    })
  }
  render() {
    return (
      <div className="my-swiper">
        <Router>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u1.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u3.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u5.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u8.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u21.jpg"
                  alt=""
                />
                <div>
                  <h3>- 2019/08/22 -</h3>
                  <h4>今日推送 >></h4>
                </div>
              </div>
              <div className="swiper-slide">
                <img
                  src="https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u22.jpg"
                  alt=""
                />
                <div>
                  <div>
                    <input type="text" placeholder="点击输入手机号/Email登录" />
                    <input type="text" placeholder="输入密码" />
                  </div>
                  <div>
                    <NavLink to="/zhuye">登录</NavLink>
                    <NavLink to="/zhuce">注册</NavLink>
                  </div>
                  <div className="home-4">
                    <p>登录或注册</p>
                  </div>
                  <div className="home-bottom">
                    <div>
                      <span className="iconfont icon-weibo" />
                      <p>微博</p>
                    </div>
                    <div>
                      <span className="iconfont icon-weixin" />
                      <p>微信</p>
                    </div>
                    <div>
                      <span className="iconfont icon-qq" />
                      <p>QQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
export default Home
