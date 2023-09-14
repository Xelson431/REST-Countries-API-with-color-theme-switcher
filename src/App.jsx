import Nav from "./components/Nav";
import "./App.css";
import Countrylist from "./components/Countrylist";
// import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import NotFound from "./components/NotFound";
// const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Countrylist />} />
          <Route
            path="/Country"
            element={
              <Country
                name={() => {
                  return [];
                }}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
