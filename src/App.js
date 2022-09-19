import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Navbar from './components/Navbar'
import Formu from './components/Formu'
import {Provider} from './components/context'
function App() {
    return(
      
      <Provider>

      <div className="app"> 
          <Navbar />
          <Formu />
      </div>
      </Provider>
      
    );
}

export default App;
