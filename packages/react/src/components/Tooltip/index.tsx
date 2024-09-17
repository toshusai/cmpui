import { createTooltip } from "@toshusai/cmpui-core";
import React, {
  CSSProperties,
  isValidElement,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Side } from "@floating-ui/dom";

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  forceShow?: boolean;
  side?: Side;
  delay?: number;
  group?: string;
  groupDelay?: number;
};

const defaultGroup = "cmpuiTooltip";

export const Tooltip = (rawProps: TooltipProps) => {
  const props = {
    group: defaultGroup,
    groupDelay: 200,
    delay: 300,
    ...rawProps,
  } as const;
  const [show, setShow] = useState(false);

  const [style, setStyle] = useState<CSSProperties>({
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
  });

  const childRef = useRef<HTMLDivElement>(null);

  const id = useId();

  const setData = (value?: string) => {
    const key = props.group;
    if (value === undefined) {
      delete document.body.dataset[key];
      return;
    }
    document.body.dataset[key] = value;
  };
  const getData = () => {
    return document.body.dataset[props.group ?? defaultGroup];
  };

  useEffect(() => {
    if (!show) {
      setShow(false);
      setTimeout(() => {
        if (id === getData()) {
          setData(undefined);
        }
      }, props.groupDelay);
    }
  }, [show]);

  const timeoutRef = useRef<number | null>(null);
  const newChildren = React.Children.map(props.children, (child) => {
    if (isValidElement(child)) {
      return React.cloneElement(child, {
        // FIXME: This might not work with all elements
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onPointerEnter: () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          if (getData()) {
            setData(id);
            setShow(true);
          } else {
            timeoutRef.current = window.setTimeout(() => {
              setShow(true);
              setData(id);
            }, props.delay);
          }
        },
        onPointerLeave: () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          setShow(false);
        },
        ref: childRef,
        ["aria-describedby"]: id,
      });
    }
    return child;
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!tooltipRef.current || !arrowRef.current) return;
    if (!childRef.current) return;
    const { cleanUp, open } = createTooltip(
      tooltipRef.current,
      childRef.current,
      arrowRef.current,
      () => {},
      (pos) => {
        setStyle((prev) => {
          const newStyle = { ...prev };
          if (pos.left !== undefined && pos.top !== undefined) {
            newStyle.transform = `translate(${pos.left}px, ${pos.top}px)`;
          }
          if (pos.maxWidth !== undefined) {
            newStyle.maxWidth = `${pos.maxWidth}px`;
          }
          if (pos.maxHeight !== undefined) {
            newStyle.maxHeight = `${pos.maxHeight}px`;
          }
          newStyle.display = undefined;
          newStyle.opacity = undefined;

          return newStyle;
        });
        if (!arrowRef.current) return;

        arrowRef.current.style.left =
          pos.arrow?.x != null ? `${pos.arrow.x}px` : "";
        arrowRef.current.style.top =
          pos.arrow?.y != null ? `${-pos.arrow.y}px` : "";

        if (pos.placement === "bottom") {
          arrowRef.current.style.transform = "rotate(180deg)";
          arrowRef.current.style.transformOrigin = "top";
          arrowRef.current.style.top = "0";
          arrowRef.current.style.bottom = "";
        } else if (pos.placement === "top") {
          arrowRef.current.style.transform = "rotate(0deg)";
          arrowRef.current.style.transformOrigin = "bottom";
          arrowRef.current.style.top = "";
          arrowRef.current.style.bottom = "-5px";
        } else if (pos.placement === "left") {
          arrowRef.current.style.transform = "rotate(-90deg)";
          arrowRef.current.style.transformOrigin = "right";
          arrowRef.current.style.top = "";
        } else if (pos.placement === "right") {
          arrowRef.current.style.transform = "rotate(90deg)";
          arrowRef.current.style.transformOrigin = "left";
          arrowRef.current.style.top = "";
          arrowRef.current.style.left = "-2px";
        }
      },
      {
        placement: props.side ?? "top",
      },
    );

    if (show || props.forceShow) {
      // Hack to make sure the tooltip is visible
      setStyle((prev) => {
        return {
          ...prev,
          display: undefined,
          opacity: 0,
        };
      });
      requestAnimationFrame(() => {
        open();
      });
    }

    return () => {
      cleanUp();
    };
  }, [show, props.side]);

  return (
    <>
      {newChildren}
      {(show || props.forceShow) &&
        createPortal(
          <div
            ref={tooltipRef}
            className="cmpui_tooltip__root"
            role="tooltip"
            style={style}
            id={id}
          >
            {props.content}
            <svg
              ref={arrowRef}
              className="cmpui_tooltip__arrow"
              style={{ position: "absolute" }}
              width="10"
              height="5"
              viewBox="0 0 30 10"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 30,0 15,10" />
            </svg>
          </div>,
          document.body,
        )}
    </>
  );
};
