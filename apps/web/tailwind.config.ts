import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070b',
        obsidian: '#08111c',
        iron: '#101b28',
        steel: '#263746',
        signal: '#5be7ff',
        command: '#f7c873',
        ember: '#ff7a45',
        mint: '#87f7c5',
        archive: '#b5a7ff',
      },
      fontFamily: {
        command: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        console: '0 0 0 1px rgba(91, 231, 255, 0.13), 0 30px 80px rgba(0, 0, 0, 0.42)',
        amber: '0 0 30px rgba(247, 200, 115, 0.18)',
      },
      backgroundImage: {
        'radial-command': 'radial-gradient(circle at 20% 10%, rgba(91, 231, 255, 0.16), transparent 26%), radial-gradient(circle at 82% 18%, rgba(247, 200, 115, 0.12), transparent 24%), linear-gradient(135deg, #05070b 0%, #08111c 52%, #05070b 100%)',
        'panel-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.018) 42%, rgba(91,231,255,0.035))',
      },
    },
  },
  safelist: [
    'from-command',
    'from-signal',
    'from-archive',
    'from-mint',
    'from-ember',
    'to-command',
    'to-signal',
    'to-archive',
    'to-mint',
    'to-ember',
  ],
  plugins: [],
} satisfies Config;
