# TAILWIND CSS

## DOCS
https://tailwindcss.com/docs

## Font Color

Syntax: text-{color}-{number} <br />
Colors: https://tailwindcss.com/docs/customizing-colors#using-custom-colors <br />
https://tailwindcss.com/docs/text-color

## Font Size

Syntax: text-{size} <br />
Sizes: https://tailwindcss.com/docs/font-size <br />

## Font Weight

Syntax: font-{weight} <br />
Weights: https://tailwindcss.com/docs/font-weight <br />

## Text Decoration

Syntax: {property}
Documentation: https://tailwindcss.com/docs/text-decoration 

## Padding

Syntax: p{t|r|b|l|x|y}-{size} <br />
Documentation: https://tailwindcss.com/docs/padding

## Margin

Syntax: m{t|r|b|l|x|y}-{size} <br />
Documentation: https://tailwindcss.com/docs/margin

## Border

Syntax: border-{width | none} - 1px default all sides <br />
Syntax: border-{t|r|b|l}-{width} - with side <br />
Syntax: border-{color}-{number} <br />

## Tailwind Config File
Used to change and extend defaults <br />
Command: npx tailwindcss init (if config file does not exist yet) <br />

To add new properties, just insert them on extend: <br />
```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
<!--       START -->
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
<!--       END -->
    },
  },
  plugins: [],
}
```

## Custom Fonts
https://tailwindcss.com/docs/font-family#using-custom-values <br />

Syntax: font-{sans|mono|serif, etc} -> check default config file (the one with --full) <br />
Steps: 
1. Select font from google fonts, copy @import in style
2. Paste in index.css
3. In config file, add 
```
fontFamily: {
  one: ['DM Sans'], (syntax: your name: ['Name of font']
  two: ['Open Sans']
}
```

## Flex

Syntax: flex {justify|items}-{value} <br />
Documentation: https://tailwindcss.com/docs/flex <br />

## Responsive Classes (Media Queries)
mobile-first approach <br />
Syntax: {size}:{class} <br />

## Cards
* shadow
* overflow
* block
* w-full (width full)
* h-32 (height)
* object-cover

## Badge
* absolute
* relative
* top-0

## Apply Directive
Usage: creates a reusable class that can have multiple properties <br />
Example: 
```
.card{
    @apply bg-white rounded overflow-hidden shadow-md relative
}
```
Then you can simply use the class "card" <br />

## Grids
https://tailwindcss.com/docs/grid-template-columns <br />
For gaps: https://tailwindcss.com/docs/gap <br />

grid grid-cols-{1-12} gap-{x|y|none}-{number} <br />
col-span-{1-12}

## Icons
https://heroicons.dev/ <br />
just add classes i.e. w-4 h-5 

## Hover
Syntax: hover:{property} duration-{number}
Syntax: {class}-hover:{property} <- usually used when parent (has class) is hovered, do something on child

## Transition
Syntax: transition ease-{linear|in|out|in-out} duration-{number}
Syntax: transform scale-{number}
