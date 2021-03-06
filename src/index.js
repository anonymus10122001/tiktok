import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Login from './pages/Login'
import Sign from './pages/Signing'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  
  return (
    <HashRouter>
      
    <Switch>
      <Route path= "/upload" component={Upload}/>
      <Route path= "/login" component={Login}/>
      <Route path= "/sign" component={Sign}/>
      <Route path= "/" component={Home}/>
    </Switch>
  </HashRouter>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)