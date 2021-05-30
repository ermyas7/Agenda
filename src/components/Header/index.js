import './Header.scss';

export default function Header({title}){
    if(!title){
        return (
            <div className="header">
            <h1 className="header-title">
                CareerFoundry
            </h1>
        </div>
        )
    }
    return (
        <div className="header">
            <h1 className="header-title">
                {title}
            </h1>
        </div>
    )
}