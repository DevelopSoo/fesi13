import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@/components/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    colorPalette: "gray",
    children: "배지 내용",
  },
};

export const XSmall: Story = {
  args: {
    size: "xs",
    colorPalette: "gray",
    children: "아무거나",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    colorPalette: "gray",
    children: "배지 내용",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    colorPalette: "gray",
    children: "배지 내용",
  },
};

export const Red: Story = {
  args: {
    size: "md",
    colorPalette: "red",
    children: "배지내용",
  },
};

export const Blue: Story = {
  args: {
    size: "md",
    colorPalette: "blue",
    children: "배지내용",
  },
};
