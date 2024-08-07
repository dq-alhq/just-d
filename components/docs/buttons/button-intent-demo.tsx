'use client'

import { Button, gridStyles } from 'ui'

export default function ButtonIntentDemo() {
  return (
    <div className={gridStyles({ columns: { initial: 2, sm: 3, lg: 4 }, gap: 3 })}>
      <Button intent="light">Label</Button>
      <Button intent="secondary">Label</Button>
      <Button intent="danger">Label</Button>
      <Button intent="info">Label</Button>
      <Button intent="light/dark">Label</Button>
      <Button intent="success">Label</Button>
      <Button>Label</Button>
    </div>
  )
}