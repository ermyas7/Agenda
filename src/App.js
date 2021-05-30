import './App.scss';
import Header from './components/Header';
import MentorsList from './components/MentorsList';
import CalanderProvider from './CalanderProvider';
import Schedule from './components/Schedule';

function App() {
  
  return (
    <div className="App">
      <CalanderProvider>
        <Header title="calendar"/>
        <MentorsList/>
        <Schedule/>
      </CalanderProvider>
    </div>
  );
}

export default App;
