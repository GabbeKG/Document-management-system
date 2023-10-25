"use client"

import { useEffect, useState } from 'react';
import { convertDeltaToHTML } from '../utils/convertDeltaToHTML';
import  {generateThumbnailFromHTML}  from '../utils/generateThumbnails';
import DocumentGallery from '../components/DocumentGallery';

export default function Home() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const[ids, setIds]=useState<string[]>([])

  useEffect(() => {
    async function getAndSetImages() {
      try {
        // Fetch Quill Delta content from your API
        const data = await fetch('/api').then((res) => res.json());

        // Initialize an array to store thumbnail image URLs
        const imageUrls = [];
        const titles = [];
        const ids = [];

        if (Array.isArray(data)) {
          for (const item of data) {
            const content = item.content;
            const title = item.title;
            const id = item.id;
            if (content) {
              const contentAsHtml = convertDeltaToHTML(JSON.parse(content));

              // Generate a thumbnail image from the HTML content
              const dataUrl = await generateThumbnailFromHTML(contentAsHtml, title);
              titles.push(title)
              imageUrls.push(dataUrl);
              ids.push(id)
              console.log("DATA ",imageUrls);
              
            } else {
              console.error('Invalid content data received:', item);
            }
          }

          setImageUrls(imageUrls);
          setTitles(titles)
          setIds(ids)
        } else {
          console.error('Invalid data format received.');
        }
      } catch (error) {
        console.error('Error while fetching and processing data:', error);
      }
    }

    getAndSetImages();
  }, []);
  console.log("What is this?: ",imageUrls)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DocumentGallery imageUrls={imageUrls} titles={titles} ids={ ids } />
    </main>
  );
}
