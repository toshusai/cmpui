import { Meta, StoryObj } from "@storybook/react";
import { IconX } from "@tabler/icons-react";
import { useContext, useState } from "react";

import { Button } from "../Button";
import { IconButton } from "../IconButton";

import { ToastContext, ToastContextProvider } from "./ToastProvider";
import { Toaster } from "./Toaster";

const meta: Meta<typeof Toaster> = {
  title: "Float/Toaster",
  component: Toaster,
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Basic: Story = {
  render: function Render() {
    return (
      <>
        <ToastContextProvider>
          <AddToastButton />
          <Toaster />
        </ToastContextProvider>
      </>
    );
  },
};

function AddToastButton() {
  const ctx = useContext(ToastContext);
  const [id, setId] = useState(0);

  return (
    <Button
      onClick={() => {
        setId(id + 1);
        ctx.addToast(() => <div>This is a toast {id}</div>);
      }}
    >
      Add Toast
    </Button>
  );
}

export const Controlled: Story = {
  render: function Render() {
    return (
      <>
        <ToastContextProvider>
          <AddToastButton2 />
          <Toaster />
        </ToastContextProvider>
      </>
    );
  },
};

function AddToastButton2() {
  const ctx = useContext(ToastContext);
  const [id, setId] = useState(0);

  return (
    <Button
      onClick={() => {
        setId(id + 1);
        ctx.addToast(
          (close) => (
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>This is a toast {id}</div>
              <IconButton size="S" onClick={close}>
                <IconX size={16} />
              </IconButton>
            </div>
          ),
          {
            time: 0,
          },
        );
      }}
    >
      Add Toast
    </Button>
  );
}
