'use client'

import { SunDimIcon, SunIcon } from 'lucide-react'

import { buttonVariants, Toggle } from '@/components/ui'

type Variant = keyof typeof buttonVariants.variants.variant

export default function ToggleButtonDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap justify-center items-center'>
            {Object.keys(buttonVariants.variants.variant).map((variant) => (
                <div key={variant}>
                    <Toggle size='icon' variant={variant as Variant}>
                        {({ isSelected }) => (
                            <>{isSelected ? <SunIcon /> : <SunDimIcon />}</>
                        )}
                    </Toggle>
                </div>
            ))}
        </div>
    )
}
