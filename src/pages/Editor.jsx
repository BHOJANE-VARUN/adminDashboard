import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EditorData } from "../data/dummy";
import Header from "../components/Header";
function Editor() {
  const [content, setContent] = useState("");
  console.log(EditorData);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"App"} title={"Editor"} />
      <CKEditor
        editor={ClassicEditor}
        data={EditorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        onReady={(editor) => {
          editor.ui.view.editable.element.style.minHeight = "500px";
        }}
      />
    </div>
  );
}

export default Editor;
