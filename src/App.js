import Layout from "./components/Layout/Layout";
import BalloonShop from "./components/BalloonShop/BalloonShop";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BalloonShop />
      </Layout>
    </div>
  );
}

export default App;
