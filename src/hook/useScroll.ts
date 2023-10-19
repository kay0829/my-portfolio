import { useState, useEffect, useMemo } from "react";
import throttle from "lodash/throttle";

export function useScroll() {
    let beforeScrollY = 0;
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [isScrollDown, setIsScrollDown] = useState(false);

    const scrollEvent = useMemo(
        () =>
            throttle(() => {
                const curScrollY = window.scrollY;
                if (curScrollY === 0) {
                    setIsScrollTop(true);
                    setIsScrollDown(false);
                } else if (curScrollY > beforeScrollY) {
                    setIsScrollTop(false);
                    setIsScrollDown(false);
                } else {
                    setIsScrollTop(false);
                    setIsScrollDown(true);
                }

                beforeScrollY = curScrollY;
            }, 300),
        [isScrollDown],
    );

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return { isScrollDown, isScrollTop };
}
