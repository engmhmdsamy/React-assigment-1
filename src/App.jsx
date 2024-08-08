import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import LayOut from "./Components/LayOut/LayOut";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";


const x =createBrowserRouter([
{ path: '' , element: <LayOut /> , children : [
  {index: true , element: <Home />} ,    
  {path: 'About' , element: <About />} ,    
  {path: 'Portfolio' , element: <Portfolio />} ,    
  {path: 'Contact' , element: <Contact />} ,    
  {path: '*' , element: <NotFound />}     

]}
])




function App() {
  return (
 <RouterProvider router={x}> </RouterProvider>
  );
}

export default App;
