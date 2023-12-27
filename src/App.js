import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
function App() {
  const [editorSState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  console.log("editorState: ", editorSState.values);
  return (
    <div className="flex flex-col justify-center items-center h-full mx-20 my-10 ">
      <div className="flex justify-center  w-full px-5">
        <div className="  w-full flex justify-center ">
          <h1 className=" font-bold">This is the title</h1>{" "}
        </div>
        <button className=" border border-r-4 border-b-4 border-black font-bold px-4">
          Save
        </button>
      </div>

      <div className=" border-2 border-red-200 min-h-[500px] w-full mt-4 p-5 ">
        <Editor editorState={editorSState} onChange={setEditorState} />
      </div>
    </div>
  );
}

export default App;
