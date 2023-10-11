import "../app.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
function TextEditor() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ header: [1, 2, 3, 4, 5] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
  };
  return (
    <div >
      <ReactQuill modules={modules} theme="snow" onChange={setValue}  
      
      className="editor"/>

    </div>
  );
}
export default TextEditor;
