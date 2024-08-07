'use client'

import {
    Card,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from '@/components/ui'
import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 }
]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))'
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig

export default function AreaChartAxesDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Area Chart - Axes</Card.Title>
                <Card.Description>
                    Showing total visitors for the last 6 months
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey='mobile'
                            type='natural'
                            fill='var(--color-mobile)'
                            fillOpacity={0.4}
                            stroke='var(--color-mobile)'
                            stackId='a'
                        />
                        <Area
                            dataKey='desktop'
                            type='natural'
                            fill='var(--color-desktop)'
                            fillOpacity={0.4}
                            stroke='var(--color-desktop)'
                            stackId='a'
                        />
                    </AreaChart>
                </ChartContainer>
            </Card.Content>
            <Card.Footer>
                <div className='flex w-full items-start gap-2 text-sm'>
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2 font-medium leading-none'>
                            Trending up by 5.2% this month{' '}
                            <TrendingUp className='h-4 w-4' />
                        </div>
                        <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                            January - June 2024
                        </div>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
}