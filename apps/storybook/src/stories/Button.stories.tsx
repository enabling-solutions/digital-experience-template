import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "ui";

const main = {
  title: "Example",
  component: Button,
} as ComponentMeta<typeof Button>;

export default main;

export const PrimaryButton: ComponentStory<typeof Button> = () => <Button />;
