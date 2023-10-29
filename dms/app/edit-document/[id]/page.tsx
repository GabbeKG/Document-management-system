'use client'

import EditDocument from "@/components/UpdateQuillEditor";
import { useState } from "react";

export default function PostPage({ params }: { params: { id: number } }) {
    const id = params.id
    
    return (
      <div className="flex justify-center items-center">
       <EditDocument id={id}/>
      </div>
    );
  }