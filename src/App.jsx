import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Maintenance from "./pages/services/maintenance solutions/Maintenance";
import Financial from "./pages/services/financial solutions/Financial";
import NotFound from "./pages/notFound/NotFound";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/maintenance" element={<Maintenance />} />
          <Route path="services/financial" element={<Financial />} />

          {/* NotFound Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;