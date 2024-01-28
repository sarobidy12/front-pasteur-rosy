import editorJsHtml from "editorjs-html";
import style from "./style.module.css";

export default function PreviewRenderer({ data }) {
  const EditorJsToHtml = editorJsHtml();
  const html = EditorJsToHtml ? EditorJsToHtml.parse(data) : null;
  if (!html) {
    return;
  }
  return (
    <div className={style.root}>
      <div className="prose max-w-full" key={data.time}>
        {[...html].map((item, index) => {
          if (typeof item === "string") {
            return (
              <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
            );
          }
          return item;
        })}
      </div>
    </div>
  );
}
