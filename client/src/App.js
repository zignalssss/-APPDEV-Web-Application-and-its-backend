import Product from './component/Product'
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
