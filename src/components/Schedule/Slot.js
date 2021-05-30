
export const RenderSlotItem = ({slot}) => {
    if(slot < 10){
        return(
            <div className="schedule-slot-item" data-testid="slot-time">
                {`0${slot}:00`}
            </div>
        )
    }
    return(
        <div className="schedule-slot-item" data-testid="slot-time">
            {`${slot}:00`}
        </div>
    )
}

export default function Slot({slotList}){
    
    return(
        <div className="schedule-slot">
            {
                slotList.map((slot) => (
                    <RenderSlotItem slot={slot} key={`slot-${slot}`}/>
                ))
            }
        </div>
    );
}