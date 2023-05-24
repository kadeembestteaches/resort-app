import './App.css';
import "./utilities.css";
import Header from "./Header";
import Hero from "./Hero";
import ResortList from "./ResortList";
import Footer from "./Footer"

function App() {
  return (
    <div className="grid grid-row-3" id="main-container">
      
      <Header/>

      <main>
          <Hero/>
          <ResortList/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
