import './App.css';
import MainPage from './components/main/MainPage';
import Sidebar from './components/sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Sidebar />
        <MainPage />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
