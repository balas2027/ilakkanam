import { useRef, useState } from "react";
import { useEffect } from "react";

const useScrollAnimation = (threshold = 0.01) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [threshold]);
    return [ref, isVisible];
};

export default useScrollAnimation;