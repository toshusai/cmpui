import { useRef, useState } from "react";

import { Popover } from "../Popover";

export type ContextMenuProps = {
  children: React.ReactNode;

  x: number;
  y: number;
  show: boolean;
  onClose: () => void;
};

export function useContextMenu() {
  const [ctx, setCtx] = useState({ x: 0, y: 0, show: false });
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setCtx({
      x: e.clientX,
      y: e.clientY,
      show: true,
    });
  };

  const handleClose = () => {
    setCtx({
      ...ctx,
      show: false,
    });
  };

  return {
    handleContextMenu,
    ctx,
    handleClose,
  };
}

export function ContextMenu(props: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={ref}
        style={{
          position: "fixed",
          top: props.y,
          left: props.x,
        }}
      ></div>
      <Popover
        trigger={ref}
        isOpen={props.show}
        onClose={props.onClose}
        autoResize
      >
        {props.children}
      </Popover>
    </>
  );
}
