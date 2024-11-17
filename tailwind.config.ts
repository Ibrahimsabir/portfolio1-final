import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        customBlue: '#2e82db',
        customBlueLight: '#6da0d6',
        customPurple: '#6f0699', // Purple color for hover
        customPurpleLight: '#7f3d99',
        facebook:'#4267B2',
        twitter: '#1DA1F2',
        youtube: '#FF0000',
        insta: '#FCAF45',
        linkedin: '#0077B5',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        slideIn: 'slideIn 1s ease-out forwards',
        blink: 'blink 1.5s step-start infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
    },
  },
  
  plugins: [],
};

export default config;
