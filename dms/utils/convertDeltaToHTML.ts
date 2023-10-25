"use client"

import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

export function convertDeltaToHTML(delta: any) {
  const converter = new QuillDeltaToHtmlConverter(delta.ops, {multiLineCodeblock:true});
  return converter.convert();
}
