import { useState } from "react"

export default function InputArea(props){
    const [note,setNote] = useState({title:"",description:""});
    function handleChange(e){
        const {value,name} = e.target;
        setNote(preValue=>{
            return{
                ...preValue,[name]:value
            }
        });
    }
    console.log(note)
    return(
        <div className="inputfield">
            <button className="closebtn" onClick={props.hide}>x</button>
            <h1>Add Some New Notes</h1>
            <input name="title" type="text" placeholder="Add Note Title" value={note.title} onChange={handleChange}/>
            <input name="description" type="text" placeholder="Add Note Description" value={note.description} onChange={handleChange}/>
            <button onClick={()=>{
                props.onAdd(note,setNote)
            }}>Add Note</button>
        </div>
    )
}