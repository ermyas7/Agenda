import './ConfirmDialog.scss';
import dayjs from 'dayjs';

// "student": "Micky",
// "slot": 1,
// "date": "2021-6-24",
// "message": "discuss part one"

export default function ConfirmDialog() {
    return (
        <div className="dialog">
            <div className="dialog-card">
                <span className="dialog-close">X</span>
                <div className="dialog-title">
                    Your call details
                </div>
                <div className="dialog-detail">
                    <p className="dialog-detail-date">On 2021-6-24 at 12:00</p>
                    <p className="dialog-detail-item">Solve more problems with Mike</p>
                </div>
            </div>
        </div>
    )
}
