import './App.scss';
import Header from './components/Header';
import MentorsList from './components/MentorsList';
import CalanderProvider from './CalanderProvider';

function App() {
  
  return (
    <div className="App">
      <CalanderProvider>
        <Header title="calendar"/>
        <MentorsList/>
      </CalanderProvider>
    </div>
  );
}

export default App;
