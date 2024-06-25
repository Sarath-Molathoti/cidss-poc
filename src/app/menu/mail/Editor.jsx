"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // import styles
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const EmailEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div className="p-4">
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        modules={EmailEditor.modules}
        formats={EmailEditor.formats}
        placeholder="Compose your email..."
        className="h-[20vh]"
      />
    </div>
  );
};

// Add modules and formats to include the necessary tools
EmailEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ],
};

EmailEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
];

export default EmailEditor;
