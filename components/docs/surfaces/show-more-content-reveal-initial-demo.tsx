'use client'

import { ContentReveal } from '@/components/ui'
import Image from 'next/image'

export default function ShowMoreContentRevealDemo() {
    return (
        <ContentReveal
            initialHeight={0}
            initialOpacity={0}
            showMoreText='Reveal'
            showLessText='Hide'
        >
            <Image
                className='rounded-xl'
                src='https://picsum.photos/1920/1080'
                alt='Image'
                width={1920}
                height={1080}
            />
        </ContentReveal>
    )
}