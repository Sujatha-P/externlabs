import logo from './logo.svg';
import './App.css';

import { Temparature } from './Components/Temperature';
import Head from './Components/Head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Wind } from './Components/Wind';
import { Precipitation } from './Components/Precipitation';

function App() {
  return (
    <div>
      <div>
      <Head />
      </div>
      <Switch>
        <Route path="/temparature">
          <Temparature />

        </Route>
        <Route path="/wind">
          <Wind />
        </Route>
        <Route path="/precipitation">
          <Precipitation />
        </Route>
      </Switch>
     
    
     
     
    </div>
  );
}

export default App;
