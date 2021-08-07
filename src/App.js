import logo from './logo.svg';
import './App.css';
import {name} from './components/importExport/ImportExport'
import Course from './components/importExport/ImportExport'
import PropsLearn from './components/props/PropsLearn';
import StateLearning from './components/state/StateLearning'

function App() {
  const mycourse = new Course("React",40,"Hamid Reza Izadi Matin")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>my name is {name}</h3>
        <h5>{mycourse.showInfo()}</h5>
        <p>we passed the props : {<PropsLearn name="i am the props"><p>i am child of props</p></PropsLearn>}</p>
        <p>this is state : {<StateLearning />}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
