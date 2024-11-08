import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Property from "./components/PropertyComponent/Property";
import Contact from "./components/ContactComponent/Contact";
import About from "./components/AboutComponent/About";
import AddProperty from "./components/AddPropertyComponent/AddProperty";
import Header from "./components/Header/Header";
import SelectedProperty from "./components/SelectedProperty/SelectedProperty";
import "./App.css";
import FixedContact from "./components/FixedContact/FixedContact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FixedContact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Property />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/propertyid/:id" element={<SelectedProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
