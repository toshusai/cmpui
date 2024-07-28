export function OriginMarker(props: {
  x: number;
  y: number;
  transform: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: props.x,
        top: props.y,
        transform: props.transform,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          transform: "translate(-50%, -50%)",
          border: "1px solid var(--cmpui-primary-color)",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 1,
            height: 16,
            background: "var(--cmpui-primary-color)",
            left: 7.5,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 16,
            height: 1,
            background: "var(--cmpui-primary-color)",
            top: 7.5,
          }}
        />
      </div>
    </div>
  );
}
