

import Header from './components/home_page/Header'
import Body from './components/home_page/Body'
import Error from './components/Error'
import Detail from './components/workers_page/Detail'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Works from './components/works_page/Works'
import Aboutus from './components/about_page/Aboutus'
import ServiceProvider from './contexts/ServiceContext'
import Works_detail from './components/works_page/works_detail';

function App() {
  return (
  
    
      
      <Router>
       <ServiceProvider>
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
          <Route path="/works/:id">
            <Works_detail/>
          </Route>
          <Route path="/aboutus">
            <Aboutus/>
          </Route>
          
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
        </ServiceProvider>
      </Router>
      
      
    
   
  );
}

export default App;
