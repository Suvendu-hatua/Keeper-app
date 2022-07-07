import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItems,setItems]=useState([])
  function addNote(item)
  {
   setItems(preVal=>{
     return [...preVal,item];
   });
   
  }
  // console.log(noteItems);
  function deleteNote(id)
  {
    setItems(preVal=>{
      return noteItems.filter((ele, index)=>
      {
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {
        noteItems.map((note,index)=>{
        return  <Note 
        key={index} 
        title={note.title} 
        content={note.content}
        deleteNote={deleteNote}
        id={index}
         />
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
