# Cmp UI

![CmpUI](./packages/react/image.png)

**This project is still in the early stage of development.**

CmpUI is a component library designed for creating complex GUI applications in web browsers.

- [Docs](https://toshusai.github.io/cmpui/iframe.html?args=&id=readme--documentation&viewMode=docs)

- [Demo project](https://toshusai.github.io/yeti) / [Repository of the demo](https://github.com/toshusai/yeti)

# Packages

| package name        | framework | support            | NPM                                                                                                                   |
| ------------------- | --------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| @toshusai/cmpui-css | CSS       | :construction:     | [![NPM Version](https://img.shields.io/npm/v/%40toshusai%2Fcmpui)](https://www.npmjs.com/package/@toshusai/cmpui-css) |
| @toshusai/cmpui     | React     | :white_check_mark: | [![NPM Version](https://img.shields.io/npm/v/%40toshusai%2Fcmpui)](https://www.npmjs.com/package/@toshusai/cmpui)     |
| @toshusai/cmpui-vue | Vue       | :construction:     |                                                                                                                       |

## Installation

```bash
npm install @toshusai/cmpui
```

## Usage

```tsx
import { Button } from "@toshusai/cmpui";
import "@toshusai/cmpui-css/dist/index.css";

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## License

MIT
