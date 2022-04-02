import { useEffect, useState } from "preact/hooks";

export default function InboxDocument({ onSuccess, onError, ...props }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const documentImage = document.querySelector(`img[alt="document"]`);
      if (!documentImage) {
        throw Error("Could not get Document Image");
      }

      const documentAnchor = documentImage.parentNode;
      if (!documentAnchor) {
        throw Error("Could not get Document Anchor");
      }

      const href = documentAnchor.href;
      if (!href) {
        throw Error("Could not get Document URL");
      }

      let fileName = null;
      let extension = null;

      fetch(href)
        .then((r) => {
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
        })
        .then((blob) => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.addEventListener("load", (evt) => {
              resolve(reader.result);
            });
            reader.addEventListener("error", (evt) => {
              reject(evt);
            });
            reader.readAsDataURL(blob);
          });
        })
        .then(
          (data) => onSuccess && onSuccess({ name: fileName, data, extension })
        )
        .catch((error) => {
          console.error(error);
          onError && onError(error);
        });
    } catch (error) {
      console.error(error);
      onError && onError(error);
    } finally {
      setLoading(false);
    }
  }, []);
}
