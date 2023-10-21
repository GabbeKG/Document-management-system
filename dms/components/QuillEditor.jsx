// components/QuillEditor.js
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill's CSS

const QuillEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

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

  return (

    <div
    className={
      " min-h-screen max-w-max flex flex-col items-center justify-center border-r-5 mt-2"
    }>

  <div  ref={editorRef} />
  </div>
)
};

export default QuillEditor;
