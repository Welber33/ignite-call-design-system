import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus molestias commodi provident rerum incidunt dolorem omnis delectus velit dolores consequuntur nihil ea enim dicta. Quod recusandae temporibus natus omnis!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
