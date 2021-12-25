import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Import Pages

import Layout from "./pages/layout";
import Mainscreen from "./pages/mainscreen";
import Languages from "./pages/languages";
import Checkout from "./pages/checkout";
import Pin from "./pages/pin";
import Withdraw from "./pages/withdraw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainscreen />} />
          <Route path="languages" element={<Languages />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="pin" element={<Pin />} />
          <Route path="withdraw" element={<Withdraw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
