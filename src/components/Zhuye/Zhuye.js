import React, { Component } from 'react'
import './zhuye.css'
import Bottom from '../Bottom/Bottom'
import ZhuyeHeader from './ZhuyeHeader'
import MySwiper1 from '../MySwiper/MySwiper'
import MySwiper2 from '../MySwiper/MySwiper'
import Zhuyemain from './Zhuyemain'
class Zhuye extends Component {
  state = {}

  render() {
    const swiperOne = {
      pics: [
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u32.jpg',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u33.jpg',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/u34.jpg'
      ],
      loop: true,
      direction: 'horizontal',
      width: '100vw',
      slidesPerView: 1,
      speed: 300,
      autoplay: {
        delay: 3000
      },
      className: 'swiperOne'
    }
    const swiperTwo = {
      pics: [
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/zhuye_u1.png',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/zhuye_u3.png',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/zhuye_u4.png',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/zhuye_u5.png',
        'https://dev.tencent.com/u/GreatDseven/p/images/git/raw/master/zhuye_u6.png'
      ],
      loop: false,
      direction: 'horizontal',
      width: '100vw',
      slidesPerView: 2.5,
      className: 'swiperTwo',
      speed: 300,
      autoplay: {
        delay: 3000
      }
    }
    return (
      <div>
        <ZhuyeHeader />
        <MySwiper1 {...swiperOne} />
        <MySwiper2 {...swiperTwo} />
        <Zhuyemain />
        <Bottom />
      </div>
    )
  }
}

export default Zhuye
