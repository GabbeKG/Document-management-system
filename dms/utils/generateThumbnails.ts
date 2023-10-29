// utils/generateThumbnails.ts
"use client"

export async function generateThumbnailFromHTML(htmlContent: any): Promise<any | null> {
  const contentElement = document.createElement('div');
  contentElement.innerHTML = htmlContent;
    console.log(contentElement);
    console.log("content",htmlContent)

  try {
    
    return contentElement.innerHTML;
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return null;
  }
}


