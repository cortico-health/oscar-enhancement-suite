import Button from "../../../../core/Button";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { getBaseUrl } from "../../../../Utils/Utils";
import { useDispatch } from "react-redux";
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

    try {
      const blob = await fetch(url).then((r) => r.blob());
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
        type: "messenger/setAll",
        payload: {
          attachment: {
            name: node.textContent,
            data: dataUrl,
          },
          document: true,
        },
      });

      console.log("Data URL", dataUrl);
    } catch (error) {
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
