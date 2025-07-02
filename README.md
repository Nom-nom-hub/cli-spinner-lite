# cli-spinner-lite

A zero-dependency utility for Node.js CLI tools that displays animated spinners during asynchronous operations.

## Features

*   **Lightweight & Zero-Dependency:** No external dependencies, ensuring a minimal footprint.
*   **Customizable:** Easily configure spinner text, animation frames, update intervals, and **colors**.
*   **Dynamic Text Updates:** Change spinner text on the fly.
*   **Promise Integration:** Use `withSpinner` to automatically manage spinner lifecycle around asynchronous operations.
*   **More Built-in Styles:** Includes common spinner styles like `dots`, `line`, `bounce`, `grow`, `arc`, `circle`, and `star`.
*   **Custom Output Stream:** Direct spinner output to any Node.js writable stream (defaults to `process.stdout`).
*   **Cross-Platform:** Works seamlessly on macOS, Windows, and Linux.
*   **TypeScript Support:** Includes TypeScript declaration files for better type checking.

## Installation

```bash
npm install cli-spinner-lite
```

## Usage

```javascript
const { Spinner, withSpinner } = require('cli-spinner-lite');
const spinnerStyles = require('cli-spinner-lite/spinnerStyles');

async function runExample() {
  console.log("--- cli-spinner-lite Example ---");

  // Basic Spinner with dynamic text update and color
  console.log("\nDemo 1: Basic Spinner (dots style, blue color)");
  const spinner1 = new Spinner({
    text: "Loading initial data",
    frames: spinnerStyles.dots.frames,
    interval: spinnerStyles.dots.interval,
    color: "blue"
  });
  spinner1.start();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner1.updateText("Processing data...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner1.stop("✅ Initial data loaded!");

  // Using withSpinner for promise integration
  console.log("\nDemo 2: withSpinner (line style, green color)");
  try {
    await withSpinner(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // throw new Error("Failed to process something important!"); // Uncomment to test error handling
    }, {
      text: "Performing a critical operation",
      frames: spinnerStyles.line.frames,
      interval: spinnerStyles.line.interval,
      color: "green"
    });
  } catch (error) {
    console.error(`❌ ${error.message}`);
  }

  // Chaining spinners
  console.log("\nDemo 3: Chaining Spinners (multiple steps)");
  await withSpinner(async () => { await new Promise((resolve) => setTimeout(resolve, 1500)); }, { text: "Step 1 of 3", frames: spinnerStyles.bounce.frames, interval: spinnerStyles.bounce.interval, color: "yellow" });
  await withSpinner(async () => { await new Promise((resolve) => setTimeout(resolve, 1500)); }, { text: "Step 2 of 3", frames: spinnerStyles.grow.frames, interval: spinnerStyles.grow.interval, color: "cyan" });
  await withSpinner(async () => { await new Promise((resolve) => setTimeout(resolve, 1500)); }, { text: "Step 3 of 3", frames: spinnerStyles.arc.frames, interval: spinnerStyles.arc.interval, color: "magenta" });
  console.log("✅ All chained steps completed!");

  // Custom stream (e.g., to a mock stream for testing)
  console.log("\nDemo 4: Custom Stream (output to a mock stream)");
  const mockStream = { _buffer: "", write(chunk) { this._buffer += chunk; }, clearLine() { this._buffer = ""; }, cursorTo() {}, getOutput() { return this._buffer; } };
  const spinner4 = new Spinner({ text: "Writing to mock stream", frames: spinnerStyles.circle.frames, interval: spinnerStyles.circle.interval, stream: mockStream, color: "red" });
  spinner4.start();
  await new Promise(resolve => setTimeout(resolve, 2000));
  spinner4.stop("✅ Mock stream operation done!");
  console.log("Mock stream content (last line):", mockStream.getOutput().split('\n').pop());

  console.log("\n--- Example Complete ---");
}

runExample();
```

## License

This project is licensed under the ISC License.