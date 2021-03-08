import { Route, Switch } from 'react-router-dom'
import FactsApp from './FactsApp'
import About from './About'
import NavBar from './components/NavBar'
import EditForm from './components/EditForm'

const App = () => {
  return (
    <>
    <NavBar />
    <h1>Render EVERYWHERE</h1>
    <Switch>
      <Route exact path='/' component={FactsApp} />
      <Route exact path='/about' component={About} />
      <Route exact path='/facts/:id' component={EditForm} />
      <Route component={()=> <p>404 page not found</p>} />
    
    </Switch>
    <h1>Footer</h1>
    </>
  )
}

export default App