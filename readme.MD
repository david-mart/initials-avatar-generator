# initials-avatar-generator

Circle avatar generator for Node.js

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
