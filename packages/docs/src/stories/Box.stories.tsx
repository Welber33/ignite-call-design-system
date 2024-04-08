import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@welber33-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: 'null',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
