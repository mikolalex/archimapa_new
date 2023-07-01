import "./App.less";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Filters from "./components/Filters/Filters";



function App() {
  // const [filters, setFilters] = useState({});



  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Map />
          <Filters />
        </main>
      </div>
    </>
  );
}

export default App;
