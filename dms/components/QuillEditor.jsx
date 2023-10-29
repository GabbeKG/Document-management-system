// components/QuillEditor.js
import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill's CSS

const QuillEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [content, setContent] = useState("");
  const[title, setTitle]=useState("")

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    
  
    [,{ 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link','image'],
    ['clean']                                         // remove formatting button
  ];
  useEffect(() => {
    if (editorRef.current && !quillRef.current) { // Check if Quill instance doesn't exist
      quillRef.current =new Quill(editorRef.current, {
        modules: {
          toolbar:toolbarOptions
          
        },
        theme: 'snow', // You can choose a different Quill theme
        // Quill options and configuration go here
      });
    }
  }, []);
  async function Save() {
    function deltaToPlainText(delta) {
      return delta.ops.map(op => op.insert).join('');
    }
    
    const title = document.getElementById('title').value;
    if (title !== "" || null) {
      
      let newcontent = document.getElementsByClassName("ql-editor");
      let delta = quillRef.current.getContents();
      
      
      const test=JSON.stringify(delta)
      setContent(delta)
      
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth()+1;
      const day = today.getDate();
      const formattedDate=`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
      
      const res = await fetch("/api", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        
        },
        body: JSON.stringify({content:test, createdAt: formattedDate, title:title})
      })
      setContent("");
    }
    else {
      alert("Title can't be empty!")
    }
  }
    
    return (
      <>
      <div className='flex justify-start' style={{width:"1040px"}}>

        
        <input id='title' type='text'  placeholder='Title' className=' mt-3 p-2' />
      </div>
    <div
    className={
      " min-h-screen max-w-max flex flex-col items-center justify-center border-r-5 mt-2"
    }>
      <div ref={editorRef} />
      <button className="flex justify-center items-center w-52 h-12 hover:bg-cyan-600 bg-blue-200 font-bold sticky bottom-0"
          onClick={() => Save()
            
          }>Save</button>
  </div>
          </>
)
};

export default QuillEditor;
