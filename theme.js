import { hack } from "mdx-deck/themes";
import prismStyle from "react-syntax-highlighter/styles/prism/tomorrow";
import prismCSS from "react-syntax-highlighter/languages/prism/css";

export default {
    ...hack,
    prism: {
        style: prismStyle,
        languages: {
            css: prismCSS,
        },
    },
};
