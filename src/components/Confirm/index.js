import './Confirm.scss';

export default function Confirm(){
    return(
        <div className="confirm">
            <div className="confirm-input">
            <label htmlFor="confirm-input">Confirm your reservation</label>
            <textarea name="confirm" id="confirm-input"></textarea>
            </div>
            <button className="confirm-btn">Confirm</button>
        </div>
    )
}