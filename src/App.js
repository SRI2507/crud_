
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './CRUD Project/create';
import Read from './CRUD Project/read';
import Update from './CRUD Project/update';
function App() {
  return (
    <div className="App">
      <h2>CRUD OPERATIONS</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element={<Create />}/>
          <Route exact path='/read' element={<Read />}/>
          <Route exact path='/update' element={<Update />}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
