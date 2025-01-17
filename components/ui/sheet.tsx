'use client'

import * as React from 'react'

import type { DialogTriggerProps, Modal } from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    type DialogProps,
    DialogTrigger,
    ModalOverlay,
    type ModalOverlayProps as ModalOverlayPrimitiveProps,
    Modal as ModalPrimitive
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Dialog } from './dialog'

interface SheetSubComponents {
    Body: typeof SheetBody
    Close: typeof SheetClose
    Content: typeof SheetContent
    Description: typeof SheetDescription
    Footer: typeof SheetFooter
    Header: typeof SheetHeader
    Title: typeof SheetTitle
    Trigger: typeof SheetTrigger
}

type SheetProps = VariantProps<typeof sheetStyles> & DialogTriggerProps

const Sheet: React.FC<SheetProps> & SheetSubComponents = (props: SheetProps) => (
    <DialogTrigger {...props}>{props.children}</DialogTrigger>
)

const SheetTrigger = Button
const SheetFooter = Dialog.Footer
const SheetHeader = Dialog.Header
const SheetTitle = Dialog.Title
const SheetDescription = Dialog.Description
const SheetBody = Dialog.Body
const SheetClose = Dialog.Close

const sheetOverlayStyles = tv({
    base: [
        'fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-50 flex items-center justify-center p-4'
    ],
    variants: {
        isBlurred: {
            true: 'backdrop-blur',
            false: 'bg-black/25 dark:bg-black/60'
        },
        isEntering: {
            true: 'animate-in fade-in duration-200 ease-out'
        },
        isExiting: {
            true: 'animate-out fade-out duration-200 ease-in'
        }
    }
})

type Sides = 'top' | 'bottom' | 'left' | 'right'
const generateCompoundVariants = (sides: Array<Sides>) => {
    return sides.map((side) => ({
        side,
        isStack: true,
        className:
            side === 'top'
                ? 'top-2 inset-x-2 rounded-lg border'
                : side === 'bottom'
                  ? 'bottom-2 inset-x-2 rounded-lg border'
                  : side === 'left'
                    ? 'left-2 inset-y-2 rounded-lg border'
                    : 'right-2 inset-y-2 rounded-lg border'
    }))
}

const sheetStyles = tv({
    base: 'fixed z-50 grid gap-4 bg-background text-foreground shadow-lg transition ease-in-out',
    variants: {
        isEntering: {
            true: 'duration-300 animate-in '
        },
        isExiting: {
            true: 'duration-200 animate-out'
        },
        side: {
            top: 'inset-x-0 top-0 rounded-b-2xl border-b entering:slide-in-from-top exiting:slide-out-to-top',
            bottom: 'inset-x-0 bottom-0 rounded-t-2xl border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom',
            left: 'inset-y-0 left-0 h-auto w-72 sm:w-3/4 overflow-y-auto border-r entering:slide-in-from-left exiting:slide-out-to-left sm:max-w-xs',
            right: 'inset-y-0 right-0 h-auto w-72 sm:w-3/4 overflow-y-auto border-l entering:slide-in-from-right exiting:slide-out-to-right sm:max-w-xs'
        },
        isStack: {
            true: '',
            false: ''
        }
    },
    compoundVariants: generateCompoundVariants(['top', 'bottom', 'left', 'right'])
})

interface SheetContentProps
    extends Omit<React.ComponentProps<typeof Modal>, 'children' | 'className'>,
        Omit<ModalOverlayPrimitiveProps, 'className'>,
        VariantProps<typeof sheetOverlayStyles> {
    'aria-label'?: DialogProps['aria-label']
    'aria-labelledby'?: DialogProps['aria-labelledby']
    role?: DialogProps['role']
    closeButton?: boolean
    isBlurred?: boolean
    isStack?: boolean
    side?: Sides
    classNames?: {
        overlay?: ModalOverlayPrimitiveProps['className']
        content?: ModalOverlayPrimitiveProps['className']
    }
}

const SheetContent = ({
    classNames,
    isBlurred = false,
    isDismissable = true,
    side = 'right',
    role = 'dialog',
    closeButton = true,
    isStack = true,
    ...props
}: SheetContentProps) => {
    const _isDismissable = role === 'alertdialog' ? false : isDismissable
    return (
        <ModalOverlay
            isDismissable={_isDismissable}
            className={composeRenderProps(
                classNames?.overlay,
                (className, renderProps) => {
                    return sheetOverlayStyles({
                        ...renderProps,
                        isBlurred,
                        className
                    })
                }
            )}
            {...props}
        >
            <ModalPrimitive
                className={composeRenderProps(
                    classNames?.content,
                    (className, renderProps) =>
                        sheetStyles({
                            ...renderProps,
                            side,
                            isStack,
                            className
                        })
                )}
                {...props}
            >
                <Dialog role={role} className='h-full'>
                    {(values) => (
                        <>
                            {props.children}
                            {closeButton && (
                                <Dialog.CloseIndicator
                                    className='top-2.5 right-2.5'
                                    close={values.close}
                                    isDismissable={_isDismissable}
                                />
                            )}
                        </>
                    )}
                </Dialog>
            </ModalPrimitive>
        </ModalOverlay>
    )
}

Sheet.Body = SheetBody
Sheet.Close = SheetClose
Sheet.Content = SheetContent
Sheet.Description = SheetDescription
Sheet.Footer = SheetFooter
Sheet.Header = SheetHeader
Sheet.Title = SheetTitle
Sheet.Trigger = SheetTrigger
export { Sheet }
