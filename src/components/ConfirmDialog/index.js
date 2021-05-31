import './ConfirmDialog.scss';
import dayjs from 'dayjs';
import {CalanderContext} from '../../CalanderProvider';
import { useContext } from 'react';

// "student": "Micky",
// "slot": 1,
// "date": "2021-6-24",
// "message": "discuss part one"

export default function ConfirmDialog() {
    const {selectedMentor, selectedSlot, completeReservation, reason} = useContext(CalanderContext);
    const date =  dayjs(selectedSlot.date).format('YYYY-M-DD');
    const time = selectedSlot.time;
    return (
        <div className="dialog" onClick={completeReservation}>
            <div className="dialog-card">
                <span className="dialog-close">X</span>
                <div className="dialog-title">
                    Your call details
                </div>
                <div className="dialog-detail">
                    <p className="dialog-detail-date">On {date} at {time}</p>
                    <p className="dialog-detail-item">{reason} with {selectedMentor.data?.name}</p>
                </div>
            </div>
        </div>
    )
}
