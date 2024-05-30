import React, { useEffect, useState } from 'react'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


function MarkDownEditor() {
  const [markEditor, setMarkEditor] = useState(
    `# Welcome to the Markdown Editor

This is a simple markdown editor built with **React**. You can write your markdown on the left and see the preview on the right.

## Features
- Write Markdown
- Preview HTML

## Example Code
\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Image
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  );
  useEffect(()=>{
    setMarkEditor(markEditor)
  },[markEditor])
  return (
    <>
    <div className="container">
      <div className='editor_container'>
      <h3>Editor</h3>
      <textarea name="markdowneditor" className='editorStyle' cols={80} rows={12} onChange={(e) => setMarkEditor(e.target.value)} value={markEditor} id="editor"></textarea>
      </div>

      <div className='editor_container'>
        <h3>Previewer</h3>
      <div id="preview" className='editorStyle' dangerouslySetInnerHTML={{__html:marked.parse(markEditor)}}></div>
      </div>
    </div>
    </>
  )
}

export default MarkDownEditor

