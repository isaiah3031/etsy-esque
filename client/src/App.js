import logo from './logo.svg';
import './App.css';
import Root from './frontend/components/root'
import configureStore from './frontend/store/store' 

function App() {
  const store = configureStore()
  window.store = store.getState()
  window.dispatch = store.dispatch
  return (
    <div className="App">
      <Root store={store}/>
    </div>
  );
}

export default App;
