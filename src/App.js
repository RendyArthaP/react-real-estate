import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../src/pages/About';
import Rental from '../src/pages/Rental';
import Hero from './components/Hero';
import { SliderData } from '../src/data/SliderData';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact />
            <Route path="/about" component={About}/>
            <Route path="/rentals" component={Rental}/>
          </Switch>
        </Router>
        <Hero slides={SliderData}/>
        <InfoSection {...InfoData}/>
      </div>
  );
}

export default App;
