import './App.css';
import { Sidebar } from './components/sidebar/sidebar';
import { Topbar } from './components/topbar/topbar.js';
import { AddCustomer } from './pages/addCustomer/addCustomer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='wrapper'>
        <Sidebar/>
        <AddCustomer/>
      </div>
    </div>
  );
}

export default App;
