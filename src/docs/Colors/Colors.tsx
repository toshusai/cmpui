const colors = [
  "--cmpui-primary-color",
  "--cmpui-primary-hover-color",
  "--cmpui-primary-active-color",
  "--cmpui-text-color",
  "--cmpui-text2-color",
  "--cmpui-text3-color",
  "--cmpui-border-color",
  "--cmpui-border-hover-color",
  "--cmpui-overlay-color",
  "--cmpui-float-shadow",

  "--cmpui-error-color",
  "--cmpui-contrast-text-color",
];

const bgColors = [
  "--cmpui-primary-color",
  "--cmpui-bg-color",
  "--cmpui-bg-hover-color",
  "--cmpui-bg-active-color",
  "--cmpui-bg-focus-color",
  "--cmpui-contrast-bg-color",
];

export function Colors() {
  return (
    <div>
      <h1>Colors</h1>

      <h2>Background</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "var(--cmpui-bg-color)",
            color: "var(--cmpui-text-color)",
          }}
        >
          {bgColors.map((color) => (
            <div
              key={color}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid var(--cmpui-border-color)",
                backgroundColor: `var(${color})`,
              }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "var(--cmpui-bg-color)",
            color: "var(--cmpui-text-color)",
          }}
          data-theme="dark"
        >
          {bgColors.map((color) => (
            <div
              key={color}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid var(--cmpui-border-color)",
                backgroundColor: `var(${color})`,
              }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>Front</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "var(--cmpui-bg-color)",
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid var(--cmpui-border-color)",
                color: `var(${color})`,
              }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "var(--cmpui-bg-color)",
          }}
          data-theme="dark"
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid var(--cmpui-border-color)",
                color: `var(${color})`,
              }}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
