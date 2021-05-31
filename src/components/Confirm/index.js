import './Confirm.scss';
import {CalanderContext} from '../../CalanderProvider';
import { useContext } from 'react';

export default function Confirm(){
    const calanderState = useContext(CalanderContext);
    if(calanderState && calanderState.error){
        return <div className="confirm">
            <div className="confirm-error">
                <h3>
                {calanderState.error}
                </h3>
            </div>
        </div>
    }else if(calanderState.selectedSlot.date && calanderState.selectedSlot.time){
        return(
            <div className="confirm">
                <div className="confirm-input">
                <label htmlFor="confirm-input">Reason for the call</label>
                <textarea 
                name="confirm" 
                id="confirm-input" 
                value={calanderState?.reason} 
                onChange={(evt) => {
                    calanderState?.setReason(evt.target.value);
                }}></textarea>
                </div>
                <button className="confirm-btn">​Confirm Call</button>
            </div>
        )
    }
    return null;
    
}