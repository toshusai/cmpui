import type { Meta, StoryObj } from "@storybook/vue3";
import CListItem from "./CListItem.vue";

const meta = {
  title: "data display/CListItem",
  component: CListItem,
} satisfies Meta<typeof CListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  render: () => ({
    components: { ListItem: CListItem },
    template: html`
      <ListItem>Neil Armstrong</ListItem>
      <ListItem>Alan Bean</ListItem>
      <ListItem>Peter Conrad</ListItem>
      <ListItem>Edgar Mitchell</ListItem>
      <ListItem>Alan Shepard</ListItem>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { ListItem: CListItem },
    template: html`
      <ListItem>Neil Armstrong</ListItem>
      <ListItem aria-disabled="true">Alan Bean</ListItem>
      <ListItem>Peter Conrad</ListItem>
      <ListItem>Edgar Mitchell</ListItem>
      <ListItem>Alan Shepard</ListItem>
    `,
  }),
};

export const Small: Story = {
  render: () => ({
    components: { ListItem: CListItem },
    template: html`
      <ListItem size="S">Neil Armstrong</ListItem>
      <ListItem size="S">Alan Bean</ListItem>
      <ListItem size="S">Peter Conrad</ListItem>
      <ListItem size="S">Edgar Mitchell</ListItem>
      <ListItem size="S">Alan Shepard</ListItem>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    components: { ListItem: CListItem },
    template: html`
      <ListItem size="L">Neil Armstrong</ListItem>
      <ListItem size="L">Alan Bean</ListItem>
      <ListItem size="L">Peter Conrad</ListItem>
      <ListItem size="L">Edgar Mitchell</ListItem>
      <ListItem size="L">Alan Shepard</ListItem>
    `,
  }),
};
