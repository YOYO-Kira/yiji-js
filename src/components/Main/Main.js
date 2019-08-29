import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Home from '../Home/Home'
import Zhuye from '../Zhuye/Zhuye'
import Zhuce from '../Zhuye/Zhuce'
import Tuijian from '../Tuijian/Tuijian'
import Fabu from '../Fabu/Fabu'
import Geren from '../Geren/Geren'
import './main.css'
import Topic from '../Topics/Topic'
class Main extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/zhuye" component={Zhuye} />
          <Route path="/zhuce" component={Zhuce} />
          <Route path="/tuijian" component={Tuijian} />
          <Route path="/fabu" component={Fabu} />
          <Route path="/geren" component={Geren} />
          <Route path="/topic" component={Topic} />
        </Router>
      </div>
    )
  }
}
export default Main
