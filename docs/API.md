# API Documentation for cli-spinner-lite

This document provides detailed API reference for the `Spinner` class and `withSpinner` utility function.

## `Spinner` Class

The `Spinner` class allows you to create and control animated CLI spinners.

### Constructor

`new Spinner(options?: SpinnerOptions)`

**Parameters:**

*   `options` (object, optional): An object to configure the spinner.
    *   `text` (string, optional, default: `""`): The text to display next to the spinner.
    *   `interval` (number, optional, default: `100`): The frame interval in milliseconds.
    *   `frames` (string[], optional, default: `["-", "\\", "|", "/"]`): An array of strings representing the animation frames.
    *   `color` (string, optional, default: `"white"`): The color of the spinner and text. Supports common ANSI colors (e.g., "red", "green", "blue", "yellow", "magenta", "cyan", "white", "gray", "black").
    *   `stream` (NodeJS.WritableStream, optional, default: `process.stdout`): The writable stream to which the spinner output will be directed. Useful for testing or logging to files.

### Methods

#### `start()`

`spinner.start(): void`

Begins the spinner animation. If the spinner is already running, this method does nothing. It hides the cursor in the terminal.

#### `stop(message?: string)`

`spinner.stop(message?: string): void`

Stops the spinner animation. It clears the current spinner line and restores the cursor visibility.
If a `message` is provided, it will be printed to the console after stopping the spinner, followed by a newline.

**Parameters:**

*   `message` (string, optional): An optional message to display after the spinner stops.

#### `updateText(newText: string)`

`spinner.updateText(newText: string): void`

Changes the text displayed next to the spinner dynamically.

**Parameters:**

*   `newText` (string, required): The new text to display.

## `withSpinner` Utility Function

The `withSpinner` utility function provides a convenient way to wrap an asynchronous operation with a spinner, automatically handling its start, stop, and success/error messages.

`withSpinner<T>(asyncFunction: () => Promise<T>, options?: SpinnerOptions): Promise<T>`

**Parameters:**

*   `asyncFunction` (function, required): An asynchronous function (or a function that returns a Promise) to be executed while the spinner is active.
*   `options` (object, optional): An object to configure the spinner, using the same properties as the `Spinner` class constructor.

**Returns:**

*   `Promise<T>`: A Promise that resolves with the result of `asyncFunction` or rejects if `asyncFunction` throws an error.

**Usage Example:**

```javascript
const { withSpinner } = require('cli-spinner-lite');
const spinnerStyles = require('cli-spinner-lite/spinnerStyles');

async function fetchData() {
  return withSpinner(async () => {
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { data: "Some fetched data" };
  }, {
    text: "Fetching data from API",
    frames: spinnerStyles.dots.frames,
    interval: spinnerStyles.dots.interval,
    color: "cyan"
  });
}

fetchData()
  .then(result => console.log("Data fetched:", result.data))
  .catch(error => console.error("Failed to fetch data:", error.message));