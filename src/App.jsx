import "./App.less";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Filters from "./components/Filters/Filters";
import SignIn from "./components/SignIn/SignIn";





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
      {/* <SignIn/> */}

      </div>
    </>
  );
}

export default App;
