import {useContext} from 'react';
import 'react-calendar/dist/Calendar.css';
import './Schedule.scss';
import Calendar from 'react-calendar';
import Slot from './Slot';
import {CalanderContext} from '../../CalanderProvider';

const slotList = [...Array(24).keys()]
export default function Schedule(){
    const calanderState = useContext(CalanderContext);
    return(
        <div className="schedule">
            <Calendar className="schedule-calendar" 
            onChange={(val) => {
                calanderState?.setSelectedSlot({
                    ...calanderState.selectedSlot,
                    date: val
                })
            }}
            value={calanderState?.selectedSlot?.date}
            />
            {calanderState?.selectedSlot?.date && <Slot slotList={slotList} calanderState={calanderState}/>}
        </div>
    );
}