export default function formatSlot(slot){
    if(slot < 10){
        return `0${slot}:00`;
    }
    return `${slot}:00`;
}