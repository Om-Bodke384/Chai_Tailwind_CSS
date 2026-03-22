# Chai Tailwind CSS

Chai Tailwind CSS is a lightweight utility-first styling system built in plain JavaScript.  
It scans HTML elements for classes starting with `chai-` and applies inline styles automatically.

This project is useful for:

- quick UI experiments
- simple static websites
- learning how utility-based styling works
- building small projects without writing separate CSS utilities

## CDN

Use the library directly from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/Om-Bodke384/Chai_Tailwind_CSS@main/index.js"></script>
```

## Quick Start

Add the CDN script, then use `chai-*` classes in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chai Tailwind CSS Demo</title>
  <script src="https://cdn.jsdelivr.net/gh/Om-Bodke384/Chai_Tailwind_CSS@main/index.js"></script>
</head>
<body>
  <div class="chai-bg-red chai-textcol-white chai-p-24 chai-br-16">
    Hello from Chai Tailwind CSS
  </div>
</body>
</html>
```

## How It Works

When the page loads, the script:

1. finds elements whose class list contains `chai-`
2. splits each class name
3. converts those classes into inline CSS styles

Current behavior is applied on `DOMContentLoaded`, which means the script processes classes present at initial page load.

## Utilities

### Colors

- `chai-bg-{color}` -> sets `background-color`
- `chai-textcol-{color}` -> sets text color

Examples:

```html
<div class="chai-bg-red chai-textcol-white">Red box</div>
<p class="chai-textcol-blue">Blue text</p>
```

### Spacing

- `chai-p-{number}` -> sets padding in `px`
- `chai-m-{number}` -> sets margin in `px`

Examples:

```html
<div class="chai-p-20">Padding 20px</div>
<div class="chai-m-10">Margin 10px</div>
```

### Size

- `chai-w-{number}` -> sets width in `px`
- `chai-h-{number}` -> sets height in `px`

Examples:

```html
<div class="chai-w-200 chai-h-100 chai-bg-gold"></div>
```

### Typography

- `chai-fs-{number}` -> sets font size in `px`
- `chai-text-{alignment}` -> sets text alignment

Examples:

```html
<h1 class="chai-fs-32">Heading</h1>
<p class="chai-text-center">Centered text</p>
```

### Border

- `chai-br-{number}` -> sets border radius in `px`

Example:

```html
<div class="chai-br-20 chai-bg-lightblue chai-p-16">Rounded box</div>
```

### Flex Utilities

- `chai-flex` -> `display: flex`
- `chai-center` -> centers content using flex
- `chai-between` -> `display: flex` with `justify-content: space-between`
- `chai-col` -> `display: flex` with `flex-direction: column`

Examples:

```html
<div class="chai-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="chai-center chai-bg-wheat" style="height: 120px;">
  Centered content
</div>

<div class="chai-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

### Grid Utilities

- `chai-grid` -> `display: grid`
- `chai-cols-{number}` -> sets repeated columns
- `chai-rows-{number}` -> sets repeated rows
- `chai-gap-{number}` -> sets grid gap in `px`

Example:

```html
<div class="chai-grid chai-cols-3 chai-gap-12">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Full Example

```html
<div class="chai-grid chai-cols-2 chai-gap-16">
  <div class="chai-bg-seagreen chai-textcol-white chai-p-20 chai-br-14">
    Card One
  </div>
  <div class="chai-bg-orange chai-textcol-white chai-p-20 chai-br-14">
    Card Two
  </div>
</div>
```

## Documentation Website

This repo also includes a static documentation website built with:

- `index.html`
- `styles.css`
- `script.js`

To open it locally, load `index.html` in a browser.

## Project Files

- `index.js` -> core Chai Tailwind CSS parser
- `index.html` -> documentation website
- `styles.css` -> documentation website styles
- `script.js` -> documentation website interactions

## Notes

- color values depend on what the browser accepts, such as `red`, `blue`, `orange`, `seagreen`
- numeric utilities use pixel values
- the current parser is intentionally simple and beginner-friendly

## Repository

GitHub: https://github.com/Om-Bodke384/Chai_Tailwind_CSS

CDN: https://cdn.jsdelivr.net/gh/Om-Bodke384/Chai_Tailwind_CSS@main/index.js
