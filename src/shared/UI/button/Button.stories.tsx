import { Button } from '../button/Button.tsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
}
type Story = StoryObj<typeof Button>
export default meta

export const Default: Story = {
    args: {
        children: 'click',
        variant: 'primary',
    },
    argTypes: {
        variant: {
            description: 'primary | secondary',
        },
        children: {
            defaultValue: 'click',
        },
        type: {
            description: 'button | submit | reset',
        },
    },
}
