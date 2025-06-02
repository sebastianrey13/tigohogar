import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  // return (
  //   <>
  //     <Header />
  //     <Outlet />
  //     <Footer />
  //   </>
  // );
   return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
