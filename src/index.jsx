// import * as $ from 'jquery'
// import Post from '@model/post'
// import json from '@assets/data'
// import logo from '@assets/icon-webpack'
import '@css/style.css'
import '@less/style.less'
import '@sass/style.scss'
import '@sass/style.sass'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '@model/lodash'

const App = () => (
  <div className="container">
    <h1>Webpack training</h1>
    <div className="logo" />
    <pre />
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)