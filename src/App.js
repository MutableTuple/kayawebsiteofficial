import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// all pages
import Gallery from "./components/gallery/gallery.component";
import Aboutus from "./components/aboutus/aboutus.component";
import Careers from "./components/careers/careers.component";
import Contact from "./components/contact/contact.component";
import Blogs from "./components/blogs/blogs.component";
import Newsletter from "./components/newsletter/newsletter.component";
import Home from "./components/home/home.component";
import Nopage from "./components/nopage/nopage.component";
import Services from "./components/services/services.component";
import Navigation from "./components/navigation/navigation.component";
//

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="careers" element={<Careers />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Newsletter />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
{
  /* <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}>
    <Route path="blogs" element={<Blogs />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="aboutus" element={<Aboutus />} />
    <Route path="careers" element={<Careers />} />
    <Route path="contact" element={<Contact />} />
    <Route path="newsletter" element={<Newsletter />} />
    <Route path="*" element={<Nopage />} />
  </Route>
</Routes> */
}
