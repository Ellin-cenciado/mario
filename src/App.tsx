import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import { PageProvider } from "./context/PageContext";

function App() {
 
  return (
    <>
      <HomePage />
      <GalleryPage />
      <ContactPage />
    </>
  )
  
}

export default App