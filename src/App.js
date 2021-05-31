import './App.scss';
import Header from './components/Header';
import MentorsList from './components/MentorsList';
import {CalanderContext} from './CalanderProvider';
import Schedule from './components/Schedule';
import Confirm from './components/Confirm';
import { useContext } from 'react';

function App() {
  const calanderState = useContext(CalanderContext);
  return (
    <div className="App">
        <Header title="calendar"/>
        <MentorsList/>
        {(calanderState?.selectedMentor?.id != null) && <Schedule/>}
        <Confirm/>
    </div>
  );
}

export default App;
