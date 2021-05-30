import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import './Schedule.scss';
import Calendar from 'react-calendar';
import Slot from './Slot';


export default function Schedule(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="schedule">
            <Calendar className="schedule-calendar" 
            onChange={onChange}
            value={value}/>
            <Slot/>
        </div>
    );
}