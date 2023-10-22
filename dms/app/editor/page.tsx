"use client"

import QuillEditor from '@/components/QuillEditor';
import quill from 'quill' 
import React, { useEffect, useState } from "react";




export default function Document() {
  
  return (
    <>
      <div className={
    "flex flex-col items-center "
  }>

        <QuillEditor />
        
       
      </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
     
    </main>
    </>
  )
}
