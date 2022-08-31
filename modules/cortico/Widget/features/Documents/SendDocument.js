import Button from "../../../../core/Button";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { getBaseUrl } from "../../../../Utils/Utils";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

export default function SendDocument({ node, ...props }) {
  const dispatch = useDispatch();
  const handleClick = async (evt) => {
    evt.preventDefault();

    if (!node) {
      return;
    }

    const nodeHtml = node.outerHTML
      .replace(/\&amp;/g, "&")
      .match(/\'(Manage[^\']+)\'/)[1];

    if (!nodeHtml) {
      return;
    }

    const documentSpace = window.location.pathname.split("/")[2];
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/${documentSpace}/${nodeHtml}`;
    let fileName = null;
    let extension = null;

    try {
      const blob = await fetch(url).then((r) => {
        if (!r.ok) {
          throw Error("Error fetching file");
        }
        try {
          const contentDisposition = r.headers.get("Content-Disposition");
          if (contentDisposition.includes("filename")) {
            fileName = contentDisposition
              .match(/(?:"[^"]*"|^[^"]*$)/)[0]
              .replace(/"/g, "");

            if (fileName) {
              extension = fileName.split(".").pop();
            }
          }
        } catch (error) {
          console.error(error);
        }
        return r.blob();
      });
      const dataUrl = await new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.addEventListener("load", (evt) => {
          resolve(reader.result);
        });
        reader.addEventListener("error", (evt) => {
          reject(evt);
        });
        reader.readAsDataURL(blob);
      });

      dispatch({
        type: "app/setOpen",
        payload: true,
      });

      dispatch({
        type: "sidebar/setCurrent",
        payload: "Messenger",
      });
      dispatch({
        type: "messenger/addAttachment",
        payload: {
          id: nanoid(),
          name: fileName || node.textContent,
          data: dataUrl,
          extension,
        },
      });

      console.log("Data URL", dataUrl);
    } catch (error) {
      dispatch({
        type: "app/setOpen",
        payload: true,
      });
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Error fetching file",
          title: "Failed to get document",
          id: nanoid(),
        },
      });
      console.error(error);
    }
  };
  return (
    <Button className="tw-m-1" size="xs" onClick={handleClick}>
      <ArrowRightIcon className="tw-w-3 tw-h-3 tw-mr-1" />
      Send
    </Button>
  );
}
