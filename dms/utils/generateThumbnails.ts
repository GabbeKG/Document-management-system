// utils/generateThumbnails.ts
"use client"
import html2canvas from 'html2canvas';

export async function generateThumbnailFromHTML(htmlContent: any, title:any): Promise<any | null> {
  const contentElement = document.createElement('div');
  contentElement.innerHTML = htmlContent;
    console.log(contentElement);
    console.log("content",htmlContent)

  try {
    
    return contentElement.innerHTML, title;
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return null;
  }
}


