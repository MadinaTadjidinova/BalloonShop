import Layout from "./components/Layout/Layout";
import BalloonBuilder from "./components/BalloonShop/BalloonShop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <BalloonBuilder />
      </Layout>
    </div>
  );
}

export default App;
