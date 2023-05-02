import { Meta, StoryObj } from "@storybook/react"
import { Button } from "ui"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
