import {
  DependencyList,
  MouseEvent,
  MutableRefObject,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';

type ScrollToRef = (e?: MouseEvent) => void;

type ScrollHooks = (
  deps?: DependencyList,
  scrollOptions?: ScrollIntoViewOptions,
) => readonly [
  ref: MutableRefObject<HTMLDivElement | null>,
  scrollToRef: ScrollToRef,
];

export const useScroll: ScrollHooks = (deps = [], scrollOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToRef: ScrollToRef = useCallback(
    (e) => {
      e?.preventDefault();

      if (!ref.current) {
        return;
      }

      ref.current.scrollIntoView({
        behavior: 'smooth',
        ...scrollOptions,
      });
    },
    [scrollOptions],
  );

  useLayoutEffect(() => {
    scrollToRef();
  }, [deps, scrollToRef]);

  return [ref, scrollToRef] as const;
};
