# Tooltip Package

## Overview

This is a simple and flexible React Tooltip component that allows customization of position, delay, trigger type, and styling.

## Installation

You can install the package using npm:

```sh
npm install react-tooltip-minify
```

Or install it locally from a `.tgz` file:

```sh
npm install ../react-tooltip-minify.tgz
```

## Usage

Import and use the `Tooltip` component in your project:

```tsx
import React from "react";
import Tooltip from "react-tooltip-minify";

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip" position="top">
        <button style={{ margin: "10px" }}>Hover me</button>
      </Tooltip>

      <Tooltip text="Click to see tooltip" position="right" trigger="click">
        <button style={{ margin: "10px" }}>Click me</button>
      </Tooltip>

      <Tooltip
        text="Styled tooltip"
        position="left"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <button style={{ margin: "10px" }}>Custom Style</button>
      </Tooltip>
    </div>
  );
};

export default App;
```

## Props

| Prop       | Type                  | Default  | Description                       |
| ---------- | --------------------- | -------- | --------------------------------- | --------- | ----------------------------------- | ----------------------- |
| `text`     | `string`              | Required | Tooltip text content              |
| `children` | `ReactNode`           | Required | Wrapped element                   |
| `position` | `'top'                | 'right'  | 'bottom'                          | 'left'`   | `'top'`                             | Position of the tooltip |
| `delay`    | `number`              | `200`    | Delay before showing tooltip (ms) |
| `trigger`  | `'hover'              | 'click'  | 'focus'`                          | `'hover'` | Event that triggers tooltip display |
| `style`    | `React.CSSProperties` | `{}`     | Custom styles for the tooltip     |

## Custom Styling

You can customize the tooltip using CSS:

```css
.tooltip-text {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
```

## License

This project is licensed under the MIT License.
