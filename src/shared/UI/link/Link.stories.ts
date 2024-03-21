import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link.tsx'
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-remix-react-router'

const meta: Meta<typeof Link> = {
    title: 'UI/Link',
    component: Link,
    tags: ['autodocs'],
    decorators: [withRouter],
    parameters: {
        reactRouter: reactRouterParameters({
            routing: { path: '/' },
        }),
    },
}

type Story = StoryObj<typeof Link>
export default meta

export const Default: Story = {
    args: {
        children: 'Link',
        to: '/path',
    },
    argTypes: {
        children: {
            defaultValue: 'click',
            description: ' ReactElement | string',
        },
        to: {
            description: 'route path',
        },
    },
}
