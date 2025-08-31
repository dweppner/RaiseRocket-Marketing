import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      electricBlue: '#164CFF',
      cosmicOrange: '#FFA500', 
      lunarGreen: '#7ED957',
      lightSpace: '#F8FAFC',
      deepText: '#1A202C',
      lightGray: '#718096',
      nebulaGray: '#A0AEC0',
      auroraPurple: '#8B5CF6',
      darkSpace: '#0A0E27',
      spaceNavy: '#1a1f3a'
    }
  },
  fonts: {
    heading: 'Space Grotesk, Inter, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    mono: 'JetBrains Mono, Fira Code, monospace'
  },
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.electricBlue',
          color: 'white',
          _hover: {
            bg: 'brand.auroraPurple',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(22, 76, 255, 0.3)'
          },
          _active: {
            transform: 'translateY(0px)'
          },
          transition: 'all 0.2s ease-in-out'
        },
        secondary: {
          bg: 'transparent',
          color: 'brand.electricBlue',
          border: '2px solid',
          borderColor: 'brand.electricBlue',
          _hover: {
            bg: 'brand.electricBlue',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(22, 76, 255, 0.2)'
          },
          _active: {
            transform: 'translateY(0px)'
          },
          transition: 'all 0.2s ease-in-out'
        },
        accent: {
          bg: 'brand.cosmicOrange',
          color: 'white',
          _hover: {
            bg: 'brand.lunarGreen',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(255, 165, 0, 0.3)'
          },
          _active: {
            transform: 'translateY(0px)'
          },
          transition: 'all 0.2s ease-in-out'
        }
      }
    },
    Input: {
      variants: {
        mission: {
          field: {
            bg: 'rgba(0, 0, 0, 0.02)',
            border: '1px solid',
            borderColor: 'gray.300',
            color: 'brand.deepText',
            _hover: {
              borderColor: 'brand.electricBlue',
            },
            _focus: {
              borderColor: 'brand.electricBlue',
              boxShadow: '0 0 0 1px #164CFF',
            },
            _placeholder: {
              color: 'brand.lightGray'
            }
          }
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.deepText'
      },
      '*': {
        scrollBehavior: 'smooth'
      }
    }
  }
});

export default theme;