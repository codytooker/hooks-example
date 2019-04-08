import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/ui/Navigation'
import Home from './components/routes/Home'
import ClassTodos from './components/routes/ClassTodos'
import HocTodos from './components/routes/HocTodos'
import HookTodos from './components/routes/HookTodos'
import HooksTodosAsync from './components/routes/HookTodosAsync'
import CustomHookTodos from './components/routes/CustomHookTodos'

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/class" component={ClassTodos} />
      <Route exact path="/class-hoc" component={HocTodos} />
      <Route exact path="/hooks" component={HookTodos} />
      <Route exact path="/hooks-async" component={HooksTodosAsync} />
      <Route exact path="/hooks-custom" component={CustomHookTodos} />
    </Switch>
  </BrowserRouter>
)

export default App
