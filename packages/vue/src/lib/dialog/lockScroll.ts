import { getScrollBarWidth } from "./getScrollBarWidth";

export const lockScroll = () => {
  const scrollLeft = document.documentElement.scrollLeft;
  const scrollTop = document.documentElement.scrollTop;
  const bodyStyle: Pick<
    CSSStyleDeclaration,
    | "overflow"
    | "position"
    | "top"
    | "left"
    | "width"
    | "height"
    | "boxSizing"
    | "paddingRight"
  > = {
    overflow: "hidden",
    position: "fixed",
    top: `${-scrollTop}px`,
    left: `${-scrollLeft}px`,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    paddingRight: `${getScrollBarWidth()}px`,
  } as const;

  const prevStyle = Object.keys(bodyStyle).reduce(
    (acc, key) => {
      acc[key as keyof typeof bodyStyle] =
        document.body.style[key as keyof typeof bodyStyle];
      return acc;
    },
    {} as Record<keyof typeof bodyStyle, string>,
  );

  Object.entries(bodyStyle).forEach(([key, value]) => {
    document.body.style[key as keyof typeof bodyStyle] = value;
  });

  return () => {
    Object.keys(bodyStyle).forEach((key) => {
      document.body.style[key as keyof typeof bodyStyle] =
        prevStyle[key as keyof typeof bodyStyle];
    });
    window.scrollTo(scrollLeft, scrollTop);
  };
};
