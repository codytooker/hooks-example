import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/ui/Navigation'
import Home from './components/routes/Home'
import ClassBased from './components/routes/ClassBased'
import HocTodos from './components/routes/HocTodos'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/class" component={ClassBased} />
      <Route exact path="/class-hoc" component={HocTodos} />
    </Switch>
  </BrowserRouter>
)

export default App
