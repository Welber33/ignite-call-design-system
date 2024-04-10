import * as TooltipUI from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipUI.Content, {
  padding: '$3 $4',
  bckground: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  borderRadius: '$xs',
  fontWeight: '$md',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0 , 0, 0.25))',
})

export const TooltipArrow = styled(TooltipUI.Arrow, {
  fill: '$gray900',
})
