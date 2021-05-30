
const slotList = [...Array(24).keys()]

const RenderSlotItem = ({slot}) => {
    if(slot < 10){
        return(
            <div className="schedule-slot-item">
                {`0${slot}:00`}
            </div>
        )
    }
    return(
        <div className="schedule-slot-item">
            {`${slot}:00`}
        </div>
    )
}

export default function Slot(){
    
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