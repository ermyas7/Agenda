import './Header.scss';

export default function Header({title}){
    return (
        <div className="header">
            <h1 className="header-title">
                {title}
            </h1>
        </div>
    )
}