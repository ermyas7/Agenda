import { createContext, useState } from "react";
import Api from "./libs/Api";
import dayjs from "dayjs";

export const CalanderContext = createContext();

export default function CalanderProvider({children}){
    const [selectedMentor, setSelectedMentor] = useState({id: null, index: null, data: {}});
    const [selectedSlot, setSelectedSlot] = useState({date: null, time: null, index: null});
    const [error, setError] = useState(null);
    const [reason, setReason] = useState('');
    const [confirmDialog, setComfirmDialog] = useState(false);

    const handleSlotReserve = async (student) => {
        if(!reason ||!selectedSlot.date || !selectedSlot.time){
            return
        }
        const url = `http://localhost:4040/mentors/${selectedMentor.id}`;
        const Http = Api(url);

        //get existing mentor detail
        const oldData = await Http.get();
        if(oldData.error) return;
        let {slots, reservations} = oldData.data;
        const key =  dayjs(selectedSlot.date).format('YYYY-M-DD');

        //update slot and reservation of the mentor
        slots[key][selectedSlot.index] = 0
        reservations = [...reservations, 
            {
                student,
                slot: 1,
                date: key,
                message: reason
            }
        ]
        //make the update on db
        await Http.patch({ slots, reservations });
        setComfirmDialog(true);
    }

    const completeReservation = () => {
        setComfirmDialog(false);
        setSelectedMentor({id: null, index: null, data: {}});
        setSelectedSlot({date: null, time: null, index: null});
        setReason('');
    }

    return <CalanderContext.Provider 
    value={
        {
            selectedMentor, 
            setSelectedMentor,
            selectedSlot, 
            setSelectedSlot, 
            reason, 
            setReason, 
            error, 
            setError, 
            confirmDialog, 
            setComfirmDialog,
            handleSlotReserve,
            completeReservation
        }
            }>
        {children}
    </CalanderContext.Provider>
}