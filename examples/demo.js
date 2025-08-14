const { Spinner, withSpinner } = require("../index");
const spinnerStyles = require("../spinnerStyles");

async function runDemo() {
  console.log("--- cli-spinner-lite Demo ---");

  // Demo 1: Basic Spinner with separate spinner and text colors
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

  // Demo 2: Using withSpinner with dynamic text updates
  console.log("\nDemo 2: withSpinner (hamburger style, green spinner and text)");
  try {
    await withSpinner(async (spinner) => {
      spinner.updateText("Starting a long task...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      spinner.updateText("Almost done...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Uncomment the line below to simulate an error
      // throw new Error("Failed to process something important!");
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

  // Demo 3: Showcasing new spinner styles
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


  // Demo 4: Custom stream (e.g., to a mock stream for testing)
  console.log("\nDemo 4: Custom Stream (output to a mock stream)");
  const mockStream = {
    _buffer: "",
    write(chunk) { this._buffer += chunk; },
    clearLine() { this._buffer = ""; },
    cursorTo() {},
    getOutput() { return this._buffer; },
    isTTY: true
  };
  const spinner4 = new Spinner({
    text: "Writing to mock stream",
    frames: spinnerStyles.circle.frames,
    interval: spinnerStyles.circle.interval,
    stream: mockStream,
    spinnerColor: "red"
  });
  spinner4.start();
  await new Promise(resolve => setTimeout(resolve, 2000));
  spinner4.stop("✅ Mock stream operation done!");
  console.log("Mock stream content (last line):", mockStream.getOutput().trim());

  console.log("\n--- Demo Complete ---");
}

runDemo();