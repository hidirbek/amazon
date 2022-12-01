import "./App.css";
import Header from "./components/header/Header";
import MiniHeader from "./components/mini-header/MiniHeader";
import Routes from "./routes";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
