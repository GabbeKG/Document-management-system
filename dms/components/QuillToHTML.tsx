// QuillToHTML.tsx
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { toCanvas } from 'html-to-image'; // Only toCanvas is used
import { useRef } from "react";

export async function CaptureQuillsToImage() {
  try {
    const res = await fetch('api', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error('Not ok');
    }

    const data = await res.json();
    const imageUrls = await Promise.all(data.map(async (item) => {
      const delta = JSON.parse(item.content);
      if (!delta || !delta.ops) {
        throw new Error('Invalid delta content');
      }
      
      const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
      const contentAsHtml = converter.convert();

      // Use html-to-image to capture the HTML as a canvas
      const contentElement = document.createElement('div');
      contentElement.innerHTML = contentAsHtml;
            
      // Capture the HTML as a canvas
      const canvas = await toCanvas(contentElement);

      // Convert the canvas to a data URL
      return canvas.toDataURL('image/png');
    }));

    return imageUrls;
  } catch (error) {
    console.log('Converting failed: ', error);
    throw error;
  }
}
