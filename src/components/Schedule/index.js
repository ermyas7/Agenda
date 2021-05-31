import {useContext, useEffect, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import './Schedule.scss';
import Calendar from 'react-calendar';
import Slot from './Slot';
import {CalanderContext} from '../../CalanderProvider';
import Api from '../../libs/Api';
import dayjs from 'dayjs';

const slotList = [...Array(24).keys()]

export default function Schedule(){
    const calanderState = useContext(CalanderContext);
    const [mentorData, setMentorData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getMentorData = async () => {
        const url = `http://localhost:4040/mentors/${calanderState?.selectedMentor?.id}`
        const Http = Api(url);
        setLoading(true);
        const res = await Http.get();
        setLoading(false);
        if(res.error){
            setError(res.error);
        }else{
            setMentorData(res.data);
        }
    }
    useEffect(() => {
        getMentorData();
    }, [])

    const from = dayjs(mentorData?.available?.from)
    const to = dayjs(mentorData?.available?.to)

    if(loading) return <div className="schedule">Loading...</div>
    if(error) return <div className="schedule">{error}</div>
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
            minDate={from.$d}
            maxDate={to.$d}
            />
            {calanderState?.selectedSlot?.date && <Slot slotList={slotList} calanderState={calanderState} mentorData={mentorData}/>}
        </div>
    );
}