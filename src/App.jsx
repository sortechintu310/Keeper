import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Note from "./components/Note";
import './App.css';
// import notes from "./notes";
import { useState } from "react";
import InputArea from "./components/InputArea";

export default function App() {
  const [notess,setNotes] = useState([
    {
        title:"Be happy!",
        description:"Be happy always be happy no matter what situtation it is. just be happy"
    },
    {
        title:"krishna is everything",
        description:"the sand is krishna, the plant is krishna everything is krishna"
    },
    {
        title:"listening to music",
        description:"listening to music is a great way to fight with anxiety and stressfull situations"
    },
    {
        title:"singing music along with listening",
        description:"singing along with listening instantly boosts up your mood."
    }]);
  
  const [isInputArea,showInputArea] = useState(false);
  function handleAdd(note,setNote){
    setNotes(preValue=>{return[...preValue,note]});
    setNote({title:"",description:""});
  }
  function deleteNote(id){
    setNotes(preValue=>{
      return preValue.filter((item,index)=>{return index!==id});
    })
  }
  function handleClick(){
    showInputArea(preValue=>{return !preValue})
  }
  return (
    <>
      <main>
        <Nav />
        {isInputArea && 
          <InputArea 
            onAdd={handleAdd}
            hide={handleClick}
          />
        }
        <div className="notes">
          {notess.length>0?notess.map((note,index)=>(
            <Note 
              key={index} 
              id={index}
              title={note.title} 
              description={note.description}
              onDelete={deleteNote} 
            />
          )):<h1 style={{color:"grey"}}>No New Notes Here</h1>}
        </div>
        <Footer />
        <button className="addbtn" onClick={handleClick}>Add</button>
      </main>
    </>
  )
}