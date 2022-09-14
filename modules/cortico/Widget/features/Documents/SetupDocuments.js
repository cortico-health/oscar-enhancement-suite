import { useEffect, useState } from "preact/hooks";
import { createPortal,Fragment } from "preact/compat";
import { nanoid } from "nanoid";
import SendDocument from "./SendDocument";
import VCNSendDocument from "./VCNSendDocument";

export default function SetupDocuments() {
  const [docNodes, setDocNodes] = useState([]);
  const [isProviderMessagingEnabled] = useState(process.env.INCLUDE_PROVIDER_MESSAGING ? true : false)

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
          <Fragment key={ node.uid }>
            <SendDocument node={ node }></SendDocument>
            { isProviderMessagingEnabled && <VCNSendDocument node={ node }></VCNSendDocument> }
          </Fragment>,
          node.parentNode
        );
      })}
    </div>
  );
}
