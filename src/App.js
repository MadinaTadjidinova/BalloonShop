import Layout from "./components/Layout/Layout";
import BalloonShop from "./components/BalloonShop/BalloonShop";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path="/" component={BalloonShop} exact />
        <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
   
    </div>
  );
}

export default App;
