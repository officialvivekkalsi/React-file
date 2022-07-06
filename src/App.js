import Header from "./Compnents/Header";
import Footer from "./Compnents/Footer";
import "./home.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Compnents/HomeScreen";
import ProductScreen from "./Compnents/productscreen";
import Cartscreen from "./Compnents/Cartscreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<Cartscreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
