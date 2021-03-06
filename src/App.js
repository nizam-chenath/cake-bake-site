
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Signup from './components/pages/Signup/Signup'
import Footer from './components/pages/Footer/Footer';
import Items from './components/pages/Items/Items';

function App() {
  
  return (
    <Router>
      <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/services"  component={Services}/>
         <Route path="/products"  component={Products}/>
         <Route path="/sign-up"  component={Signup}/>
       </Switch>
       <Items/>
       <Footer/>
    </Router>
  );
}
 
export default App;
