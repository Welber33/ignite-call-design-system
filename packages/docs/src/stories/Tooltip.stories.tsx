import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Box } from '@welber33-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: 'null',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alingItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
