import ShowProduct from "./component/showProduct";
import AddProduct from "./component/addProduct";
import EditProduct from "./component/editProduct";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container p-3 mt-8 mx-auto flex">
        <Routes>
          <Route path="/" element={<ShowProduct/>} />
          <Route path="addProduct" element={<AddProduct/>} />
          <Route path="editProduct/:id" element={<EditProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
