import "./App.css";
import Footer from "./Components/Footer";
import Manager from "./Components/Manager";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-[87vh]">
        <Manager />
      </div>

      <Footer />
    </>
  );
}

export default App;
