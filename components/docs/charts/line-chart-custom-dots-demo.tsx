'use client'

import {
    Card,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from '@/components/ui'
import { GitCommitVertical, TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

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

export default function LineChartCustomDotsDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Line Chart - Custom Dots</Card.Title>
                <Card.Description>January - June 2024</Card.Description>
            </Card.Header>
            <Card.Content>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
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
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey='desktop'
                            type='natural'
                            stroke='var(--color-desktop)'
                            strokeWidth={2}
                            dot={({ cx, cy, payload }) => {
                                const r = 24
                                return (
                                    <GitCommitVertical
                                        key={payload.month}
                                        x={cx - r / 2}
                                        y={cy - r / 2}
                                        width={r}
                                        height={r}
                                        fill='hsl(var(--background))'
                                        stroke='var(--color-desktop)'
                                    />
                                )
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </Card.Content>
            <Card.Footer className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing total visitors for the last 6 months
                </div>
            </Card.Footer>
        </Card>
    )
}