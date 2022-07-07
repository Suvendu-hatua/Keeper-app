import React,{useState} from "react";

function CreateArea(props) {
  const [item,setItem]=useState({
    title:"",
    content:""
  });
  // const [noteItems,addItems]=useState([]);
  function handleChange(event)
  {
     const value=event.target.value;
    const input=event.target.name;
    if(input==="title")
      setItem(preVal=>{
     return { title:value,
        content:preVal.content
      }
      });
    else{
      setItem(preVal=>{
        return {
          title:preVal.title,
          content:value
        }
      })
    }   
  }
  function handleSubmit(event)
  {
   props.addNote(item);
  event.preventDefault();
  setItem({
    title:"",
    content:""
  })
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={item.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={item.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
