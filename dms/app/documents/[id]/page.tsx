'use client'

import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { convertDeltaToHTML } from '@/utils/convertDeltaToHTML';
import { generateThumbnailFromHTML } from '@/utils/generateThumbnails';
import Link from 'next/link';

export default function Document({ params }: { params: { id: number } }) {
    const [contentHtml, setContentHtml] = useState<string[]>([])
    useEffect(() => {
        async function showDocument() {
            
        
            const res = await fetch('/api/' + params.id).then((res) => res.json());

            const html = [];
            
            if (Array.isArray(res)) {
                for (const item of res) {
                    const content = item.content;
                    if (content) {
                
                        const contentAsHtml = convertDeltaToHTML(JSON.parse(content));
                        const htmlcontent = await generateThumbnailFromHTML(contentAsHtml);
                        html.push(htmlcontent)
                    }
                }
                setContentHtml(html);
            }
        }
        showDocument();
    
    }, []);
        return (
            <div id='viewDoc' className='min-h-screen flex flex-col justify-center items-center'>
                {contentHtml.map((content, index) => (
                    <div  key={index} className='viewDoc flex justify-center'>

                        <div className="bg-white viewDoc p-20" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                ))}
                <Link href={'/edit-document/'+params.id}><button className="flex justify-center items-center w-52 h-12 hover:bg-cyan-600 bg-blue-200 font-bold sticky bottom-5"
  >Edit</button></Link>
            </div>
        );
    }
