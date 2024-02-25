import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Select } from ".";
import { SelectItem } from "./SelectItem";

const meta: Meta<typeof Select> = {
  title: "Components/Form/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Option 3",
    value: "3",
  },
  {
    label: "Option 4",
    value: "4",
  },
];

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState("1");
    return (
      <Select label="Label" value={value} onChange={setValue}>
        {options.map((option) => (
          <SelectItem value={option.value} key={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [value, setValue] = useState("1");
    return (
      <Select label="Label" value={value} onChange={setValue} disabled>
        {options.map((option) => (
          <SelectItem value={option.value} key={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    );
  },
};

export const DisabledItem: Story = {
  render: function Render() {
    const [value, setValue] = useState("1");
    return (
      <Select label="Label" value={value} onChange={setValue}>
        {options.map((option) => (
          <SelectItem
            value={option.value}
            key={option.value}
            disabled={option.value === "2"}
          >
            {option.label}
          </SelectItem>
        ))}
      </Select>
    );
  },
};

const fontList = [
  "Roboto",
  "Sixtyfour",
  "Wavefont",
  "Gabarito",
  "Agbalumo",
  "Honk",
  "Slackside One",
  "Smooch",
  "Chokokutai",
  "Monomaniac One",
  "Palette Mosaic",
].sort();
export const Fonts: Story = {
  render: function Render() {
    const fonts = fontList.map((font) => ({
      label: font,
      value: font,
      family: font,
      url: `https://fonts.googleapis.com/css2?family=${font}&display=swap`,
    }));
    const [value, setValue] = useState("Roboto");
    return (
      <Select label="font" value={value} onChange={setValue}>
        {fonts.map((font) => (
          <FontRender
            family={font.family}
            url={font.url}
            value={font.value}
            key={font.value}
          >
            {font.label}
          </FontRender>
        ))}
      </Select>
    );
  },
};

const map = new Map<string, string>();
function loadFontFromCss(url: string) {
  if (map.has(url)) return;

  const link = document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";
  document.head.appendChild(link);

  map.set(url, url);
}

function FontRender(props: {
  value: string;
  url: string;
  family: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    loadFontFromCss(props.url);
  }, [props.url]);

  return (
    <SelectItem value={props.value}>
      <div
        style={{
          fontFamily: props.family,
        }}
      >
        {props.children}
      </div>
    </SelectItem>
  );
}
