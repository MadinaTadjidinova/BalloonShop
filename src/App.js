import Layout from "./components/Layout/Layout";
import BalloonShop from "./components/BalloonShop/BalloonShop";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";

import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path="/" component={BalloonShop} exact />
        <Route path="/checkout" component={Checkout} />
        <Route path="orders" component={Orders} />
        <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
