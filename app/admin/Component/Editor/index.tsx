import { FC, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./config";

interface Props {
  id: string;
  name: string;
  value: any;
  handleChange: (e: any) => void;
  placeHolder?: string;
}

const Editor: FC<Props> = ({ id, name, value, placeHolder, handleChange }) => {
  const ref = useRef<any>(null);
  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: id,
        tools: EDITOR_TOOLS,
        data: value,
        onChange: async function (api, event) {
          try {
            // Wait for the save operation to complete, including image uploads
            const savedData = await api.saver.save();
            handleChange(savedData);
          } catch (error) {
            // Handle errors during save operation
            console.error("Error during save:", error);
          }
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={id} className="prose max-w-full" />;
};

export default Editor;
