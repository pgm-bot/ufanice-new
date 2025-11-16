<template>
  <svg
    v-if="icon"
    :viewBox="icon.viewBox"
    :width="size"
    :height="size"
    class="ui-icon"
    fill="none"
    role="img"
    aria-hidden="true"
  >
    <template v-for="(path, index) in icon.paths" :key="index">
      <path
        :d="path.d"
        :fill="path.fill ? 'currentColor' : 'none'"
        :stroke="path.stroke ? 'currentColor' : 'none'"
        :stroke-width="path.strokeWidth ?? 2"
        :stroke-linecap="path.strokeLinecap ?? 'round'"
        :stroke-linejoin="path.strokeLinejoin ?? 'round'"
      />
    </template>
    <template v-if="icon.text">
      <rect
        v-if="icon.text.background"
        :x="icon.text.background.x"
        :y="icon.text.background.y"
        :width="icon.text.background.width"
        :height="icon.text.background.height"
        :rx="icon.text.background.radius ?? 0"
        fill="currentColor"
        opacity="0.15"
      />
      <text
        :x="icon.text.x"
        :y="icon.text.y"
        fill="currentColor"
        :font-size="icon.text.fontSize"
        font-weight="700"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        {{ icon.text.value }}
      </text>
    </template>
  </svg>
</template>

<script setup lang="ts">
type IconPath = {
  d: string
  stroke?: boolean
  fill?: boolean
  strokeWidth?: number
  strokeLinecap?: 'round' | 'square' | 'butt'
  strokeLinejoin?: 'round' | 'miter' | 'bevel'
}

type IconText = {
  value: string
  x: number
  y: number
  fontSize: number
  background?: { x: number; y: number; width: number; height: number; radius?: number }
}

type IconDef = {
  viewBox: string
  paths: IconPath[]
  text?: IconText
}

type IconName =
  | 'close'
  | 'plus'
  | 'bars'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'sign-in'
  | 'user-plus'
  | 'bullhorn'
  | 'wallet'
  | 'hand-dollar'
  | 'dollar'
  | 'line-logo'

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number
  }>(),
  {
    size: 20
  }
)

const icons: Record<IconName, IconDef> = {
  close: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M6 6l12 12', stroke: true },
      { d: 'M18 6L6 18', stroke: true }
    ]
  },
  plus: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 5v14', stroke: true },
      { d: 'M5 12h14', stroke: true }
    ]
  },
  bars: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M4 7h16v2H4z', fill: true },
      { d: 'M4 11h16v2H4z', fill: true },
      { d: 'M4 15h16v2H4z', fill: true }
    ]
  },
  'chevron-left': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M14 6l-6 6 6 6', stroke: true }]
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M10 6l6 6-6 6', stroke: true }]
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    paths: [{ d: 'M6 14l6-6 6 6', stroke: true }]
  },
  'sign-in': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M4 5h8v14H4z', stroke: true, strokeLinejoin: 'round' },
      { d: 'M12 12h8', stroke: true },
      { d: 'M17 8l4 4-4 4', stroke: true }
    ]
  },
  'user-plus': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', stroke: true },
      { d: 'M2 20c0-3.5 3.5-6 7-6', stroke: true },
      { d: 'M17 9v6', stroke: true },
      { d: 'M14 12h6', stroke: true }
    ]
  },
  bullhorn: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M6 10l10-4v12l-10-4v-4z', stroke: true, strokeLinejoin: 'round' },
      { d: 'M6 14H4a2 2 0 0 1 0-4h2', stroke: true }
    ]
  },
  wallet: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M3 7h18v10H3z', stroke: true, strokeLinejoin: 'round' },
      { d: 'M17 12h4v4h-4a2 2 0 0 1 0-4z', stroke: true, strokeLinejoin: 'round' }
    ]
  },
  'hand-dollar': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M3 16h9a2 2 0 0 1 2 2v2H3z', stroke: true, strokeLinejoin: 'round' },
      { d: 'M14 18h5a2 2 0 0 0 0-4h-2', stroke: true },
      { d: 'M14 7h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2', stroke: true }
    ]
  },
  dollar: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 4v16', stroke: true },
      { d: 'M15 8c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2c-1.1 0-2-.9-2-2', stroke: true }
    ]
  },
  'line-logo': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5h-3l-3.5 3.5c-.5.5-1.5.1-1.5-.6V18a5 5 0 0 1-5-5V7z', stroke: true, strokeLinejoin: 'round' }
    ],
    text: {
      value: 'LINE',
      x: 12,
      y: 11,
      fontSize: 5.5
    }
  }
}

const icon = computed(() => icons[props.name])
</script>

<style scoped>
.ui-icon {
  display: inline-block;
}
</style>
