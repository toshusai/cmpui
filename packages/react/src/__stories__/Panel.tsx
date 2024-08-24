export const Panel = (
  props: {
    color: string;
    name: string;
  } & React.HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      style={{
        background: props.color,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "auto",
        position: "relative",
      }}
      {...props}
    >
      <div
        style={{
          width: "100%",
          pointerEvents: "none",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "32px",
          position: "absolute",
        }}
      >
        {props.name}
      </div>
      {/* <pre
        style={{
          fontSize: "12px",
          fontFamily: "monospace",
          margin: 0,
          padding: 8,
        }}
      >
        <code>{JSON.stringify(node?.node.toJson(), null, 4)}</code>
      </pre> */}
    </div>
  );
};
