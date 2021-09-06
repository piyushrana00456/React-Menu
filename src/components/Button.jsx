import "./Menu.css"

export function Button(props) {
    return(
        <div className="">
            <button className={props.name}>{props.name}</button>
        </div>
    )
}