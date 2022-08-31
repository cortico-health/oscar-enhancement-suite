import { useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { nanoid } from "nanoid";
import SendDocument from "./SendDocument";

export default function SetupDocuments() {
  const [docNodes, setDocNodes] = useState([]);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    if (params.get("function") !== "demographic") {
      return;
    }
    const pdf_links = document.querySelectorAll(
      "#privateDocs td:nth-child(2) a"
    );

    if (pdf_links) {
      const temp = [];
      pdf_links.forEach((node) => {
        if (node.href.indexOf("?sort") > -1) {
          return;
        }
        node.uid = nanoid();
        temp.push(node);
      });
      setDocNodes(temp);
    }
  }, []);

  return (
    <div>
      {docNodes.map((node) => {
        return createPortal(
          <SendDocument node={node} key={node.uid}></SendDocument>,
          node.parentNode
        );
      })}
    </div>
  );
}
