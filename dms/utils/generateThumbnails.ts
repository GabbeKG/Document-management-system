"use client"

export async function generateThumbnailFromHTML(htmlContent: any): Promise<any | null> {
  const contentElement = document.createElement('div');
  contentElement.innerHTML = htmlContent;
  

  try {
    
    return contentElement.innerHTML;
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return null;
  }
}


