"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
export default function DocumentGallery({ imageUrls, titles, ids }) {
    console.log(imageUrls)
    console.log(titles)
    const galleryDiv=document.getElementById('gallery')
    return (
        <div id='gallery' className=" grid-flow-row justify-center w-full text-cyan-800 font-bold">
            <h1 className='flex justify-center mb-10 text-3xl bg-blue-300 p-10'>All Documents</h1>
            <div className='flex relative justify-center'>

            {imageUrls.map((imageUrl, index) => (
                <div id={ids[index]} key={index}>
                    
                    <h2 className='titles flex justify-center bg-indigo-300 mx-4'>{ titles[index]}</h2>  
                    <div >
                        <ul className='docLi flex justify-center items-center absolute flex-col mx-20 bg-red-400 '>

                    <Link href={'/documents/'+ids[index]}><li><button>View</button></li></Link>
                    <li><button>Edit</button></li>
                    <li><button>Delete</button></li>
                        </ul>
                        </div>
                    <div className="previews bg-white mx-4 min-h-full" key={index} dangerouslySetInnerHTML={{ __html: imageUrl }}></div>
            </div>
                    
                    
                    
                    ))}
                        
                    </div>
      </div>
    )
}