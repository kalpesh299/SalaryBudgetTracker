import logo from './logo.svg';
import './App.css';
import { Expenseprovider } from './context/ExpenseContext';
import { SamplExpence } from './components/SamplExpence';

function App() {
  return (
    <div className="App">
    <Expenseprovider>
      <SamplExpence/>
    </Expenseprovider>
    </div>
  );
}

export default App;
