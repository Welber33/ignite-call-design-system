import * as TooltipUI from '@radix-ui/react-tooltip'
import { ComponentProps } from '../../types/ComponentProps'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipUI.Root> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root {...props}>
        <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
