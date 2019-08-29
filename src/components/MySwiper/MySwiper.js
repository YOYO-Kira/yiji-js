import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './my-swiper.css'
class MySwiper extends Component {
  componentDidMount() {
    const {
      loop,
      slidesPerView,
      direction,
      className,
      speed,
      autoplay
    } = this.props
    // 初始化 swiper
    new Swiper(`.${className}`, {
      direction: direction,
      loop: loop,
      slidesPerView: slidesPerView,
      speed: speed,
      autoplay: autoplay
    })
  }
  render() {
    const { pics, width, height, className } = this.props
    return (
      <div className="my-swiper">
        <div
          style={{ width, height }}
          className={`swiper-container ${className}`}
        >
          <div className="swiper-wrapper">
            {pics.map((item, index) => (
              <div key={item + index} className="swiper-slide">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default MySwiper
