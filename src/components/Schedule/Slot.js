import formatSlot from "../../libs/formatSlot";
import dayjs from 'dayjs';

export const RenderSlotItem = ({slot, calanderState, status, index}) => {
    const handleSlotSelect = () => {
        if(status === 0){
            calanderState.setError('Slot is not available! Please try another slot!'); 
        }else{
            calanderState.setError(''); 
            calanderState.setSelectedSlot({
                ...calanderState.selectedSlot,
                time: formatSlot(slot),
                index: index
            }) 
        }       
    }
    return(
        <div 
        className={`schedule-slot-item ${(calanderState?.selectedSlot?.time === formatSlot(slot)) ? 'schedule-slot-item-selected': ''}  ${status === 0 ? 'schedule-slot-item-reserved' : '' }`} 
        data-testid="slot-time" 
        onClick={handleSlotSelect}>
            {formatSlot(slot)}
        </div>
    )
}

export default function Slot({slotList, calanderState, mentorData}){
    const key =  dayjs(calanderState?.selectedSlot?.date).format('YYYY-M-DD');
    console.log(key);
    const slotStatus = mentorData.slots[key];
    return(
        <div className="schedule-slot">
            {
                slotList.map((slot, i) => (
                    <RenderSlotItem 
                    slot={slot} 
                    key={`slot-${slot}`} 
                    calanderState={calanderState} 
                    status={slotStatus &&slotStatus[i]} 
                    index={i}/>
                ))
            }
        </div>
    );
}