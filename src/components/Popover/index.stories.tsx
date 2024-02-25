import { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import { Popover } from ".";
import { Button } from "../Button";
import { SliderNumberField } from "../SliderNumberField";
import { TextInput } from "../TextInput";

const meta: Meta<typeof Popover> = {
  title: "Components/Float/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Popover
          isOpen={open}
          onOpenChange={() => setOpen(false)}
          content={
            <Body
              onClose={() => {
                setOpen(false);
              }}
            />
          }
        >
          <Button onClick={() => setOpen(true)}>Open Popover</Button>
        </Popover>
      </>
    );
  },
};

function Body({
  onClose,
}: {
  onClose?: () => void;
} = {}) {
  const [name, setName] = useState("Awesome project");
  const [width, setWidth] = useState(256);
  const [height, setHeight] = useState(512);

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [],
  );

  const handleChangeWidth = useCallback((value: number[]) => {
    setWidth(value[0]);
  }, []);

  const handleChangeHeight = useCallback((value: number[]) => {
    setHeight(value[0]);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: 256,
      }}
    >
      <TextInput
        placeholder="input"
        label="name"
        value={name}
        onChange={handleChangeName}
        autoFocus
      />
      <div style={{ display: "flex", gap: 8 }}>
        <SliderNumberField
          placeholder="input"
          label="width"
          value={[width]}
          onChangeValue={handleChangeWidth}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          ×
        </div>
        <SliderNumberField
          placeholder="input"
          label="heigt"
          value={[height]}
          onChangeValue={handleChangeHeight}
        />
      </div>

      <Button onClick={onClose}>Save</Button>
    </div>
  );
}
