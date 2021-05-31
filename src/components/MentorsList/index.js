import './MentorsList.scss';
import MentorItem from './MentorItem';
import { useContext, useEffect, useState } from 'react';
import {CalanderContext} from '../../CalanderProvider';
import Api from '../../libs/Api';

export default function MentorsList(){
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const getMentors = async () => {
        const url = 'http://localhost:4040/mentors';
        const Http = Api(url);
        setLoading(true);
        const res = await Http.get();
        setLoading(false);
        if(res.error){
            setError(res.error); 
        }else{
            setMentors(res.data);
        }
    }
    useEffect(() => {
        getMentors();
    },[])

    if(loading) return <div className="mentor-list">Loading Mentor List</div>
    if(error) return <div className="mentor-list">{error}</div>
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