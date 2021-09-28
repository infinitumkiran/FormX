import NavBar from "./components/NavBar";
import Infinity from "./components/Infinity"
import Addusers from "./components/Addusers"
import Allusers from "./components/Allusers"
import NotFound from "./components/NotFound";
import {BrowserRouter,Route,Switch} from "react-router-dom"

function App() {
  return (
    <p>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
        <Route exact path="/" component={Infinity} />
        <Route exact path="/all" component={Allusers} />
        <Route exact path="/add" component={Addusers} />
        <NotFound Component={NotFound} />
        </Switch>
        
      </BrowserRouter>

      
    </p>
      );
}

export default App;
