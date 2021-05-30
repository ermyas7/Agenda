export default function MentorItem({mentor, index}) {
    return (
        <div className="mentor">
            <h1 className="mentor-name">
                {mentor.name}
            </h1>
        </div>
    )
}

