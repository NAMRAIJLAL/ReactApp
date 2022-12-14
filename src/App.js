import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import NavBar from "./components/navbar";
import Search from "./components/search";

// import Learning from "./components/learning";

// import Index from './components/index';

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      {/* <Learning /> */}
    </div>
  );
}

export default App;
