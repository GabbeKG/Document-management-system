import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const EditDocument = ({ id }) => {
  const editorRef = useRef(null);
    const quillRef = useRef(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
          
          setTitle(data[0].title);
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
        if (editorRef.current && !quillRef.current) {
          quillRef.current = new Quill(editorRef.current, {
            modules: {
              toolbar: toolbarOptions,
            },
            theme: 'snow',
          });
          
          
          
          quillRef.current.setContents(JSON.parse(data[0].content));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
    
    async function Update() {
        function deltaToPlainText(delta) {
            return delta.ops.map(op => op.insert).join('');
        }
    
        
        if (title !== "" || null) {
      
            
            let delta = quillRef.current.getContents();            
            
            const test = JSON.stringify(delta)
            setContent(delta)
            
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
      
            const res = await fetch("/api/"+id, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
        
                },
                body: JSON.stringify({id:id, content: test, lastUpdated: formattedDate, title: title })
            })
            setContent("");
        }
        else {
            alert("Title can't be empty!")
        }
      
    }
  return (
      <>
          <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-start' style={{width:"1040px"}}>

        
<input id='title' type='text' value={title} onChange={handleTitleChange}  placeholder='Title' className=' mt-3 p-2' />
</div>
              
              <div ref={editorRef}>
      </div>
              <button className="flex justify-center items-center w-52 h-12 hover:bg-cyan-600 bg-blue-200 font-bold sticky bottom-0"
          onClick={() => Update()}>Update</button>
          </div>
    </>
  );
};

export default EditDocument;
