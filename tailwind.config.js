/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        pokemons: {
          bug: {
            bg: '#8bd674',
            button: {
              bg: '#8cb230',
            }
          },
          dark: {
            bg: '#6f6e78',
            button: {
              bg: '#58575f',
            }
          },
          dragon: {
            bg: '#7383b9',
            button: {
              bg: '#0f6ac0',
            }
          },
          electric: {
            bg: '#f2cb55',
            button: {
              bg: '#eed535',
            }
          },
          fairy: {
            bg: '#eba8c3',
            button: {
              bg: '#ed6ec7',
            }
          },
          fighting: {
            bg: '#eb4971',
            button: {
              bg: '#d04164',
            }
          },
          fire: {
            bg: '#ffa756',
            button: {
              bg: '#fd7d24',
            }
          },
          flying: {
            bg: '#83a2e3',
            button: {
              bg: '#748fc9',
            }
          },
          ghost: {
            bg: '#8571be',
            button: {
              bg: '#64548f',
            }
          },
          grass: {
            bg: '#8bbe8a',
            button: {
              bg: '#62B957',
            }
          },
          ground: {
            bg: '#f78551',
            button: {
              bg: '#dd7748',
            }
          },
          ice: {
            bg: '#91d8df',
            button: {
              bg: '#61cec0',
            }
          },
          normal: {
            bg: '#b5b9c4',
            button: {
              bg: '#9da0aa',
            }
          },
          poison: {
            bg: '#A040A0',
            button: {
              bg: '#A552CC',
            }
          },
          psychic: {
            bg: '#ff6568',
            button: {
              bg: '#ea5d60',
            }
          },
          rock: {
            bg: '#d4c294',
            button: {
              bg: '#baab82',
            }
          },
          steel: {
            bg: '#4c91b2',
            button: {
              bg: '#417d9a',
            }
          },
          water: {
            bg: '#58abf6',
            button: {
              bg: '#4a90da',
            }
          }
        },
        abilitys: {
          hp: {
            circle: '#DF2140',
            bg: '#F24662',
          },
          attack: {
            circle: '#F5AC50',
            bg: '#FFB278',
          },
          defense: {
            circle: '#7FBC41',
            bg: '#A1C77B',
          },
          specialAttack: {
            circle: '#A890F0',
            bg: '#C2B1F6',
          },
          specialDefense: {
            circle: '#F38A97',
            bg: '#FCA8B2',
          },
          speed: {
            circle: '#A040A0',
            bg: '#B46EB4',
          },
          total: {
            circle: '#7195DC',
            bg: '#96B8FF',
          },
        },
        text: {
          primary: '#17171b',
          secondary: '#17171b99',
        },
        'primary': '#F6F8FC',
        'text-gray': '#8F9396',
        'text-gray-dark': '#7D7F80',
        'text-red': '#FF5350',
        'dark-blue': '#000E45',
        'blue': '#2459CC',
      },
      boxShadow: {
        'shadow': 'rgb(0 0 0 / 30%) 1px 3px 12px 0px'
      },
      keyframes: {
        float: {
          '0%, 100%': {
		        transform: 'translatey(0)',
          },
          '50%': {
		        transform: 'translatey(-20px)'
          },
        }
      },
      animation: {
        floating: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
