import formatSlot from "../../libs/formatSlot";

export const RenderSlotItem = ({slot, calanderState}) => {
    const handleSlotSelect = () => {
        calanderState.setSelectedSlot({
            ...calanderState.selectedSlot,
            time: formatSlot(slot)
        })        
    }
    return(
        <div 
        className={`schedule-slot-item ${(calanderState?.selectedSlot?.time === formatSlot(slot)) ? 'schedule-slot-item-selected': ''}`} 
        data-testid="slot-time" 
        onClick={handleSlotSelect}>
            {formatSlot(slot)}
        </div>
    )
}

export default function Slot({slotList, calanderState}){
    
    return(
        <div className="schedule-slot">
            {
                slotList.map((slot) => (
                    <RenderSlotItem slot={slot} key={`slot-${slot}`} calanderState={calanderState}/>
                ))
            }
        </div>
    );
}