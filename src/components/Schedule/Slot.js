import formatSlot from "../../libs/formatSlot";

export const RenderSlotItem = ({slot, calanderState, status}) => {
    const handleSlotSelect = () => {
        calanderState.setSelectedSlot({
            ...calanderState.selectedSlot,
            time: formatSlot(slot)
        })        
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

export default function Slot({slotList, calanderState, slotStatus}){
    
    return(
        <div className="schedule-slot">
            {
                slotList.map((slot, i) => (
                    <RenderSlotItem slot={slot} key={`slot-${slot}`} calanderState={calanderState} status={slotStatus &&slotStatus[i]}/>
                ))
            }
        </div>
    );
}