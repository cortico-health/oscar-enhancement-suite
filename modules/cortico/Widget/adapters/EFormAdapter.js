import { nanoid } from "nanoid";
import { useEffect, useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { setFormInputValueAttributes } from "../../../Utils/Utils";

export default function EFormAdapter() {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  useEffect(() => {
    const clone = window.document.cloneNode(true);
    const widget = clone.querySelector(".cortico-widget");
    widget.parentNode.removeChild(widget);

    /* Eform Letter Head Begin */
    const richTextLetterForm = clone.querySelector(
      `form[name="RichTextLetter"]`
    );
    const iframe = window.document.querySelector("iframe#edit");
    if (richTextLetterForm && iframe) {
      clone.querySelector("iframe")?.remove();
      clone.querySelector("table")?.remove();
      const iframeClone = iframe.contentDocument.cloneNode(true);
      clone
        .querySelector("body")
        .appendChild(iframeClone.querySelector("body"));
    }

    setFormInputValueAttributes(clone)
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        throw Error("Error parsing eform");
      });
  }, []);

  useEffect(() => {
    if (data) {
      dispatch({
        type: "messenger/addAttachment",
        payload: {
          id: nanoid(),
          name: "eForm",
          data,
          type: "eForm",
          extension: "pdf_html",
        },
      });
    }
  }, [data]);
  return (
    <>
      <div></div>
    </>
  );
}
