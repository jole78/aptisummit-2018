import { hack } from "mdx-deck/themes";
import prismStyle from "react-syntax-highlighter/styles/prism/tomorrow";
import prismCSS from "react-syntax-highlighter/languages/prism/css";
import nightOwl from "prism-react-renderer/themes/nightOwl";

export default {
    ...hack,
    prism: {
        style: prismStyle,
        languages: {
            css: prismCSS,
        },
    },
    codeSurfer: {
        ...nightOwl,
    },
};
