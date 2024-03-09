import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Button, ColorInput, Grid, RectGizmo } from "..";
import { HSVA, hexToHsv, hsvaToRgba, rgbaToCss } from "../utils/colors";

import "./README.css";

const WIDTH = 128;
const HEIGHT = 30;
export function README(props: {
  children?: React.ReactNode;
}) {
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
    width: WIDTH,
    height: HEIGHT,
    angle: -Math.PI / 24,
  });
  const [init, setInit] = useState(false);

  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (init) {
      return;
    }
    const h1 = h1Ref.current;
    if (!h1) return;
    const rect = h1.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setPoints({
      ...points,
      x,
      y,
    });
    setInit(true);
  }, [init, points]);

  return (
    <>
      <Grid
        className="grid"
        color="color-mix(in srgb, var(--cmpui-primary-color) 50%, transparent)"
      />

      <div
        style={{
          height: 64,
        }}
      >
        <div
          style={
            init
              ? {
                  top: points.y - HEIGHT / 2,
                  left: points.x - WIDTH / 2,
                  width: WIDTH,
                  height: HEIGHT,
                  transform: `rotate(${points.angle}rad) scale(${
                    points.width / WIDTH
                  }, ${points.height / HEIGHT})`,

                  pointerEvents: "none",
                  position: "absolute",
                  margin: 0,
                  zIndex: 1,
                }
              : undefined
          }
        >
          <h1 ref={h1Ref} id="title">
            CmpUI
          </h1>
        </div>
      </div>

      <p
        style={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        CmpUI is a component library designed for creating complex GUI
        applications in web browsers.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Buttons />

        <ColorChanger />

        <div
          style={{
            padding: "0 16px",
          }}
        >
          {props.children}
        </div>
      </div>

      {init && (
        <RectGizmo
          angle={points.angle}
          height={points.height}
          width={points.width}
          x={points.x}
          y={points.y}
          onMove={(args) => {
            setPoints((points) => ({
              ...points,
              ...args,
            }));
          }}
          isResizable
          isRotatable
        />
      )}
    </>
  );
}

function ColorChanger() {
  const [color, setColor] = useState(hexToHsv("#c649ba"));

  const handleChange = useCallback((hsva: HSVA) => {
    document.documentElement.style.setProperty(
      "--cmpui-primary-color",
      rgbaToCss(hsvaToRgba(hsva)),
    );
    setColor(hsva);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <ColorInput value={color} onChange={handleChange} />
      </div>
    </div>
  );
}

const Buttons = memo(function Buttons() {
  const storybookUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:6006/?path=/docs/components-form-angleinput--documentation"
      : "https://toshusai.github.io/cmpui";

  const isStorybook = window.self !== window.top;

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Button
        as="a"
        href="https://github.com/toshusai/cmpui"
        style={{
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <GitHubSVG />
          GitHub
        </div>
      </Button>
      {!isStorybook && (
        <Button
          variant="secondary"
          as={"a"}
          href={storybookUrl}
          style={{
            color: "white",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <StorybookSVG />
            Storybook
          </div>
        </Button>
      )}
    </div>
  );
});

function GitHubSVG() {
  return (
    <svg
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.707 95.707"
    >
      <title>icon-github</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#fff"
      />
    </svg>
  );
}

function StorybookSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="16"
      version="1.1"
      viewBox="0 0 52 64"
    >
      <title>icon-storybook</title>
      <defs>
        <path
          id="path-1"
          d="M1.94279175,57.1309472 L0.0022554267,5.95476663 C-0.0618328758,4.26461814 1.24754196,2.83223697 2.95307926,2.72673418 L46.9330824,0.00617628491 C48.6691159,-0.10121296 50.1644074,1.2046298 50.2729096,2.92285771 C50.2769973,2.98759391 50.2790429,3.05244063 50.2790429,3.11730315 L50.2790429,58.8828028 C50.2790429,60.6043831 48.8689636,62 47.1295431,62 C47.0824212,62 47.0353056,61.9989534 46.9882313,61.9968606 L4.94876437,60.1280997 C3.31149338,60.0553189 2.00425692,58.751918 1.94279175,57.1309472 Z"
        />
      </defs>
      <g
        id="icon-storybook-default"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g id="icon" transform="translate(1.000000, 1.000000)">
          <path
            id="Combined-Shape"
            fill="#FF4785"
            fillRule="nonzero"
            d="M50.2729096,2.92285771 C50.2769973,2.98759391 50.2790429,3.05244063 50.2790429,3.11730315 L50.2790429,58.8828028 C50.2790429,60.6043831 48.8689636,62 47.1295431,62 C47.0824212,62 47.0353056,61.9989534 46.9882313,61.9968606 L4.94876437,60.1280997 C3.31149338,60.0553189 2.00425692,58.751918 1.94279175,57.1309472 L0.0022554267,5.95476663 C-0.0618328758,4.26461814 1.24754196,2.83223697 2.95307926,2.72673418 L37.427,0.594 L37.1272753,7.62078766 C37.1238721,7.70179664 37.1419373,7.78178731 37.179031,7.85305525 L37.2223772,7.92113026 C37.3791917,8.12573637 37.6738999,8.16578288 37.880626,8.0105767 L37.880626,8.0105767 L40.6382617,5.94019678 L42.9673936,7.75618537 C43.0546693,7.82423279 43.1634862,7.85946584 43.2745216,7.85562813 C43.5338374,7.84666553 43.7367132,7.6313391 43.7276576,7.37468316 L43.7276576,7.37468316 L43.467,0.22 L46.9330824,0.00617628491 C48.6691159,-0.10121296 50.1644074,1.2046298 50.2729096,2.92285771 Z"
          />
          <mask id="mask-2" fill="#fff">
            <use xlinkHref="#path-1" />
          </mask>
          <path
            id="S"
            fill="#FFF"
            fillRule="nonzero"
            d="M29.4029796,23.368648 C29.4029796,24.58142 37.6567008,24.00017 38.7646901,23.1482813 C38.7646901,14.8895929 34.2873503,10.5497821 26.0885852,10.5497821 C17.88982,10.5497821 13.2961856,14.9571143 13.2961856,21.5681161 C13.2961856,33.0822778 28.9959487,33.3026444 28.9959487,39.5830962 C28.9959487,41.3460299 28.1237396,42.3927719 26.2048797,42.3927719 C23.7045471,42.3927719 22.7160434,41.1289316 22.832338,36.8317805 C22.832338,35.8995698 13.2961856,35.6089448 13.0054493,36.8317805 C12.2651161,47.2453073 18.8201763,50.248968 26.3211742,50.248968 C33.5895831,50.248968 39.2880157,46.4144645 39.2880157,39.4729126 C39.2880157,27.132376 23.3556634,27.4629261 23.3556634,21.3477494 C23.3556634,18.8686237 25.2163761,18.5380737 26.3211742,18.5380737 C27.4841196,18.5380737 29.5774214,18.7409467 29.4029796,23.368648 Z"
            mask="url(#mask-2)"
          />
          <path
            id="bookmark"
            fill="#FFF"
            fillRule="nonzero"
            d="M37.1272753,7.62078766 L37.4276823,0.591583333 L43.4674595,0.218291667 L43.7276576,7.37468316 C43.7367132,7.6313391 43.5338374,7.84666553 43.2745216,7.85562813 C43.1634862,7.85946584 43.0546693,7.82423279 42.9673936,7.75618537 L40.6382617,5.94019678 L37.880626,8.0105767 C37.6738999,8.16578288 37.3791917,8.12573637 37.2223772,7.92113026 C37.1563661,7.83500129 37.1227378,7.72879963 37.1272753,7.62078766 Z"
            mask="url(#mask-2)"
          />
        </g>
      </g>
    </svg>
  );
}
