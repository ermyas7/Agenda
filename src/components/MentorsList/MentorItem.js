import {CalanderContext} from '../../CalanderProvider';
import { useContext } from 'react';

export default function MentorItem({mentor, index}) {
    const calanderState = useContext(CalanderContext);
    return (
        <div 
        className={`mentor ${(calanderState?.selectedMentor?.index === index)? 'mentor-active': ''}`}
        onClick={() => {
            calanderState?.setSelectedMentor({
                index,
                id: mentor.id
            })
        }}>
            <h1 className="mentor-name">
                {mentor.name}
            </h1>
        </div>
    )
}

