import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  options?: IntersectionObserverInit;
}

export const useIntersectionObserver = ({ onIntersect, options }: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || !onIntersect) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 1.0, ...options }
    );
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [onIntersect, options, targetRef]);
  return { ref: targetRef };
};
