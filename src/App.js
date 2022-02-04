
import {  Container } from 'react-bootstrap'
import Header from './components/Header'
import Body from './components/Body'
import Error from './components/Error'
import Detail from './components/Detail'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Works from './components/Works'
import Aboutus from './components/Aboutus'



function App() {
  return (
  
   
      
      <Router>
       
        <Header/>
        <Switch>
          <Route exact path="/">
            <Body/>
          </Route>
          
          <Route path="/sections/workers/:id">
            <Detail/>
          </Route>
          <Route path="/sections/works/:id">
            <Works/>
          </Route>
          <Route path="/aboutus">
            <Aboutus/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      
      </Router>
      
      
    
   
  );
}

export default App;
