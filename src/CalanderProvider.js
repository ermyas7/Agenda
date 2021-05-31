import { createContext, useState } from "react";

export const CalanderContext = createContext();

export default function CalanderProvider({children}){
    const [selectedMentor, setSelectedMentor] = useState({id: null, index: null});
    const [selectedSlot, setSelectedSlot] = useState({date: null, time: null});
    const [error, setError] = useState(null);
    const [reason, setReason] = useState('');
    const [confirmDialog, setComfirmDialog] = useState(false);

    const handleSlotReserve = (student) => {
        if(!reason ||!selectedSlot.date || !selectedSlot.time){
            return
        }
        setComfirmDialog(true);
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
            handleSlotReserve
        }
            }>
        {children}
    </CalanderContext.Provider>
}