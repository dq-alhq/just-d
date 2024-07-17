'use client'

import {
    Card,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from '@/components/ui'
import { TrendingUp } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' }
]

const chartConfig = {
    visitors: {
        label: 'Visitors'
    },
    chrome: {
        label: 'Chrome',
        color: 'hsl(var(--chart-1))'
    },
    safari: {
        label: 'Safari',
        color: 'hsl(var(--chart-2))'
    },
    firefox: {
        label: 'Firefox',
        color: 'hsl(var(--chart-3))'
    },
    edge: {
        label: 'Edge',
        color: 'hsl(var(--chart-4))'
    },
    other: {
        label: 'Other',
        color: 'hsl(var(--chart-5))'
    }
} satisfies ChartConfig

export default function PieChartCustomLabelDemo() {
    return (
        <Card className='flex flex-col'>
            <Card.Header className='items-center pb-0'>
                <Card.Title>Pie Chart - Custom Label</Card.Title>
                <Card.Description>January - June 2024</Card.Description>
            </Card.Header>
            <Card.Content className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='mx-auto aspect-square max-h-[250px]'
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey='visitors' hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey='visitors'
                            labelLine={false}
                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill='hsla(var(--foreground))'
                                    >
                                        {`${
                                            chartConfig[
                                                payload.browser as keyof typeof chartConfig
                                            ]?.label
                                        } (${payload.visitors})`}
                                    </text>
                                )
                            }}
                            nameKey='browser'
                        />
                    </PieChart>
                </ChartContainer>
            </Card.Content>
            <Card.Footer className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing total visitors for the last 6 months
                </div>
            </Card.Footer>
        </Card>
    )
}
