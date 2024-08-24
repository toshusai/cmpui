export const Root = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        height: "512px",
        width: "100vw",
        display: "flex",
        padding: "4px",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </div>
  );
};
