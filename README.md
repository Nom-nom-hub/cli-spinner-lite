# cli-spinner-lite

A zero-dependency utility for Node.js CLI tools that displays animated spinners during asynchronous operations.

## Features

*   **Lightweight & Zero-Dependency:** No external dependencies, ensuring a minimal footprint.
*   **Customizable:** Easily configure spinner text, animation frames, and update intervals.
*   **Enhanced Color Support:** Set separate colors for the spinner and text, with an expanded color palette including bright colors.
*   **Dynamic Text Updates:** Change spinner text on the fly, even within a `withSpinner` block.
*   **Promise Integration:** Use `withSpinner` to automatically manage spinner lifecycle around asynchronous operations.
*   **Tons of Built-in Styles:** Includes over a dozen common spinner styles like `dots`, `line`, `pipe`, `hamburger`, `arrow`, and more.
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

  // Basic Spinner with separate spinner and text colors
  console.log("\nDemo 1: Basic Spinner (dots style, brightBlue spinner, yellow text)");
  const spinner1 = new Spinner({
    text: "Loading initial data",
    frames: spinnerStyles.dots.frames,
    interval: spinnerStyles.dots.interval,
    spinnerColor: "brightBlue",
    textColor: "yellow"
  });
  spinner1.start();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner1.updateText("Processing data...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner1.stop("✅ Initial data loaded!");

  // Using withSpinner with dynamic text updates
  console.log("\nDemo 2: withSpinner (hamburger style, green spinner and text)");
  try {
    await withSpinner(async (spinner) => {
      spinner.updateText("Starting a long task...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      spinner.updateText("Almost done...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // throw new Error("Failed to process something important!"); // Uncomment to test error handling
    }, {
      text: "Performing a critical operation",
      frames: spinnerStyles.hamburger.frames,
      interval: spinnerStyles.hamburger.interval,
      spinnerColor: "green",
      textColor: "green"
    });
  } catch (error) {
    console.error(`❌ ${error.message}`);
  }

  // Showcasing some of the new spinner styles
  console.log("\nDemo 3: New Spinner Styles");
  const newStyles = ["dots2", "pipe", "arrow", "bouncingBar"];
  for (const style of newStyles) {
    await withSpinner(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }, {
      text: `Testing style: ${style}`,
      frames: spinnerStyles[style].frames,
      interval: spinnerStyles[style].interval,
      spinnerColor: "magenta",
      textColor: "cyan"
    });
  }
  console.log("✅ All new styles tested!");

  console.log("\n--- Example Complete ---");
}

runExample();
```

## License

This project is licensed under the ISC License.