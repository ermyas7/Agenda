import './Confirm.scss';

export default function Confirm(){
    return(
        <div className="confirm">
            <textarea name="confirm" className="confirm-input"></textarea>
            <button className="confirm-btn">Confirm</button>
        </div>
    )
}