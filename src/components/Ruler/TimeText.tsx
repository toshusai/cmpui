export function TimeText(props: {
  time: string;
  left: number;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      className="cmpui_ruler-text__root"
      data-orientation={props.orientation}
      style={{
        left:
          props.orientation === "horizontal" ? `${props.left}px` : undefined,
        top: props.orientation === "horizontal" ? undefined : `${props.left}px`,
      }}
    >
      <div
        className="cmpui_ruler-text__line"
        data-orientation={props.orientation}
      />
      <div
        className="cmpui_ruler-text__text"
        data-orientation={props.orientation}
      >
        {props.time}
      </div>
    </div>
  );
}
