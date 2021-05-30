import './MentorsList.scss';
import MentorItem from './MentorItem';

const mentors = [
    {
        id: '1',
        name: 'mike',
    },
    {
        id: '2',
        name: 'Jony',
    },
    {
        id: '3',
        name: 'Howy',
    },
    {
        id: '4',
        name: 'Awesome',
    },
    {
        id: '5',
        name: 'Artor',
    }
]
export default function MentorsList(){
    return(
        <div className="mentors-list">
            <h1 className="mentors-list-title">
                Your mentors
            </h1>
            <div className="mentors-list-items">
            {
                mentors.map((mentor, index) => (
                    <MentorItem mentor={mentor} key={`${mentor.id}`} index={index}/>
                ))
            }
            </div>
        </div>
    )
}