export default function Note(props){
    return(
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={()=>{
                props.onDelete(props.id)
            }}>DELETE</button>
        </div>
    )
}