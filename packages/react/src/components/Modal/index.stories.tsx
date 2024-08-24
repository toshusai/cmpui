import { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import { Modal } from ".";
import { Button } from "../Button";
import { SliderNumberField } from "../SliderNumberField";
import { TextInput } from "../TextInput";

const meta: Meta<typeof Modal> = {
  title: "Float/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: function RenderBasic() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal title="settings" open={open} onClose={() => setOpen(false)}>
          <Body
            onClose={() => {
              setOpen(false);
            }}
          />
        </Modal>
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

  const handleChangeWidth = useCallback((value: number | number[]) => {
    if (typeof value !== "number") throw new Error("value is not number");
    setWidth(value);
  }, []);

  const handleChangeHeight = useCallback((value: number | number[]) => {
    if (typeof value !== "number") throw new Error("value is not number");
    setHeight(value);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
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
