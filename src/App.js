import './App.css';
import { Sidebar } from './components/sidebar/sidebar';
import { Topbar } from './components/topbar/topbar.js';
import { AddCustomer } from './pages/addCustomer/addCustomer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Order } from './pages/order/order';
import { Menu } from './pages/menu/menu';
import { AddMenu } from './pages/menu/addMenu';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='wrapper'>
        
        <BrowserRouter>
        <Sidebar/>
          <div>
            <Routes>
              <Route path="/add-customer" element={<AddCustomer/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/add-menu" element={<AddMenu/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
