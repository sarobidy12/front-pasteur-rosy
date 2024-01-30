import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
import Table from "@editorjs/table";
import { urlApi } from "@/app/Utils/api";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: false,
    tunes: ["anyTuneName"],
    config: {
      placeholder: "Entrer votre titre",
      levels: [2, 3, 4],
    },
  },
  // table: {
  //   class: Table,
  //   inlineToolbar: true,
  //   config: {
  //     rows: 2,
  //     cols: 3,
  //   },
  // },
  paragraph: {
    placeholder: "Votre contenu ici",
    class: Paragraph,
    inlineToolbar: false,
    tunes: ["anyTuneName"],
  },
  anyTuneName: {
    class: AlignmentTuneTool,
    // config: {
    //   blocks: {
    //     header: "center",
    //   },
    // },
  },
  embed: Embed,
  image: {
    class: Image,
    inlineToolbar: true,
    config: {
      endpoints: {
        byFile: `${urlApi}/file/since-editor?folder=editorUpload`, // Your backend file uploader endpoint
        byUrl: `${urlApi}/`, // Your endpoint that provides uploading by Url
      },
    },
  },
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
};
