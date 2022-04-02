import { useEffect, useState } from "preact/hooks";

export default function InboxDocument() {
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

      fetch(href)
        .then((r) => r.blob())
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
        .then((data) => console.log("Doc Data", data))
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
}
