import logo from './logo.svg';
import './App.css';
import Root from './frontend/components/root'
import configureStore from './frontend/store/store' 

function App() {
  const store = configureStore()
  return (
    <div className="App">
      <Root store={store}/>
    </div>
  );
}

export default App;
