import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/ui/Navigation'
import Home from './components/routes/Home'
import ClassTodos from './components/routes/ClassTodos'
import HocTodos from './components/routes/HocTodos'
import HookTodos from './components/routes/HookTodos'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/class" component={ClassTodos} />
      <Route exact path="/class-hoc" component={HocTodos} />
      <Route exact path="/hooks" component={HookTodos} />
    </Switch>
  </BrowserRouter>
)

export default App
