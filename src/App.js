import "./App.css";
// COMPONENTS //
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
// PAGES//
import Pages from "./pages/Pages";
// REACT_ROUTER_DOM //
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories />
      <Pages />
    </div>
  );
}

export default App;
