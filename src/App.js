import './App.scss';
import Header from './components/Header';
import MentorsList from './components/MentorsList';

function App() {
  return (
    <div className="App">
      <Header title="calendar"/>
      <MentorsList/>
    </div>
  );
}

export default App;
