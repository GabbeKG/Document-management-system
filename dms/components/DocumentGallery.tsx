import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function DocumentGallery({ imageUrls, titles, ids }) {
  async function DeleteDocument(id) {
    try {
      const res = await fetch(`api/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 204) {
        // Post deleted successfully
        console.log('Post deleted successfully');
      } else if (res.status === 404) {
        // Post not found
        console.error('Post not found');
      } else {
        // Handle other errors
        console.error('An error occurred while deleting the post');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <div id='gallery' className="grid justify-center items-center text-cyan-800 font-bold">
      <h1 className='flex justify-center mb-10 text-3xl bg-blue-300 p-10'>All Documents</h1>
      <div className='flex flex-wrap justify-center'>
        {imageUrls.map((imageUrl, index) => (
          <div id={ids[index]} className='w-full m-2 md:w-1/2 lg:w-1/3 xl:w-1/6' key={index}>
            <div className='previewWrapper flex flex-wrap  overflow-clip'>
              <h2 className='titles w-full md:w-48 flex justify-center bg-indigo-300 mx-4'>{titles[index]}</h2>
              <ul className='docLi flex z-10 mx-4 pl-5 space-x-4 bg-indigo-200 w-full'>
                <Link href={'/documents/' + ids[index]}><li><button>View</button></li></Link>
                <Link href={'/edit-document/' + ids[index]}><li><button>Edit</button></li></Link>
                <li><button onClick={() => DeleteDocument(ids[index])}>Delete</button></li>
              </ul>
              <Link href={'/documents/' + ids[index]}>
                <div className="previews bg-white mx-4 min-h-full" key={index} dangerouslySetInnerHTML={{ __html: imageUrl }}></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
