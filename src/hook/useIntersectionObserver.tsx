import { useCallback, useRef } from "react";

export const useIntersectionObserver = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const lastItemRef = useCallback((node: HTMLDivElement) => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // fetch를 하기위한 callback
                    console.dir(observerRef.current);
                }
            },
            { rootMargin: "200% 0px" },
        );

        if (node) {
            observerRef.current.observe(node);
        }
    }, []);

    return { lastItemRef };
};
