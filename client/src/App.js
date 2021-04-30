import logo from './logo.svg';
import './App.css';
import Root from './frontend/components/root'
import { store } from './frontend/store/store'

function App() {
  // window.getState = store.getState
  // window.d = store.dispatch
  return (
    <div className="App">
      <Root store={store} />
    </div>
  );
}

export default App;
