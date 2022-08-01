import { useEffect, useState } from 'preact/hooks';

/* This Hooks will change the class name depending if the content is in left */

export default function useLeftPositionObserver(open, ref) {
    const [className, setClassName] = useState("-tw-right-4");

    useEffect(() => {
        if(open === true && ref?.current.getBoundingClientRect().left < 0){
            setClassName("tw-left-0")
        } else{
            setClassName("-tw-right-4");
        }
    }, [open])

    return className;
}