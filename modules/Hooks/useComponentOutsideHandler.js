import { useEffect } from "react";


/* Hook that helps the certain component hide if it is clicked outside */
 
export default function useComponentOutsideHandler(ref, setTask) {
  useEffect(() => {
    /* Function that will be perform if the component is clicked outside */
    function handleClickOutside(event) {
      /* if the once clicked is not the DOM itself */
      if (ref.current && !ref.current.contains(event.target)) {
        setTask(() => false);
      }
    }

    // Initialize the event listener on mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}