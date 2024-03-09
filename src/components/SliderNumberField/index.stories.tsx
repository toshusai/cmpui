import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SliderNumberField } from ".";
import { TextInput } from "../TextInput";

const meta: Meta<typeof SliderNumberField> = {
  title: "Form/SliderNumberField",
  component: SliderNumberField,
};

export default meta;

type Story = StoryObj<typeof SliderNumberField>;

export const Basic: Story = {
  render: function Render(props) {
    const [value, setValue] = useState([0]);
    return (
      <SliderNumberField
        {...props}
        label="value"
        inputMode="decimal"
        value={value}
        onChangeValue={setValue}
      />
    );
  },
};

export const Mixed: Story = {
  render: function Render(props) {
    const [values, setValues] = useState([1, 2, 3]);
    return (
      <div>
        <SliderNumberField
          {...props}
          label="value"
          value={values}
          onChangeValue={(values) => {
            if (!Array.isArray(values)) throw new Error("values is not array");
            setValues(values);
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 8,
          }}
        >
          {values.map((value, index) => (
            <TextInput
              type="number"
              key={index}
              value={value.toString()}
              onChange={(e) => {
                const newValues = [...values];
                newValues[index] = Number(e.target.value);
                setValues(newValues);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};
