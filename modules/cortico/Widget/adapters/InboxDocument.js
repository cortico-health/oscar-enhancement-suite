import { useEffect } from "preact/hooks";

export default function InboxDocument() {
  useEffect(() => {
    console.log("This is re-rendering unfortunately.");
  }, []);
}
