# initials-avatar-generator

Circle avatar generator for Node.js


## Examples

![David Mart](https://github.com/david-mart/initials-avatar-generator/blob/master/samples/DM.png?raw=true)
![Leela Turanga](https://github.com/david-mart/initials-avatar-generator/blob/master/samples/LT.png?raw=true)
![Pavel Durov](https://github.com/david-mart/initials-avatar-generator/blob/master/samples/PD.png?raw=true)
![Nick Minard](https://github.com/david-mart/initials-avatar-generator/blob/master/samples/NM.png?raw=true)
## TSDoc

<!-- INSERT GENERATED DOCS START -->

### `defaultPalette` (variable: string[])

Color Palette

### `getBgColor` (function)

### `getFontColor` (function)

### `IAGConfig` (interface)

**Members:**

- palette (`string[]`)
- width (`number`)
- fontProportion (`number`)
- maxLetters (`number`)

### `draw` (function)

### `getInitials` (function)

### `generate` (function)

Generate avatar

**Parameters:**

- name (`string`) - Full name to be split into initials
- config (`IAGConfig`) - Configuration

```tsx
generate('Pavel Durov', {
  width: 300,
  palette: ['#d97706', '#4f46e5', '#9333ea'],
  maxLetters: 2,
  fontProportion: 0.6
});
```

<!-- INSERT GENERATED DOCS END -->
