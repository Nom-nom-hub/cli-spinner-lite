const { Spinner, withSpinner } = require("../index");
const spinnerStyles = require("../spinnerStyles");

async function runDemo() {
  console.log("--- cli-spinner-lite Demo ---");

  // Demo 1: Basic Spinner with dynamic text update and color
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

  // Demo 2: Using withSpinner for promise integration
  console.log("\nDemo 2: withSpinner (line style, green color)");
  try {
    await withSpinner(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // Uncomment the line below to simulate an error
      // throw new Error("Failed to process something important!");
    }, {
      text: "Performing a critical operation",
      frames: spinnerStyles.line.frames,
      interval: spinnerStyles.line.interval,
      color: "green"
    });
  } catch (error) {
    console.error(`❌ ${error.message}`);
  }

  // Demo 3: Chaining spinners
  console.log("\nDemo 3: Chaining Spinners (multiple steps)");
  await withSpinner(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }, {
    text: "Step 1 of 3",
    frames: spinnerStyles.bounce.frames,
    interval: spinnerStyles.bounce.interval,
    color: "yellow"
  });

  await withSpinner(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }, {
    text: "Step 2 of 3",
    frames: spinnerStyles.grow.frames,
    interval: spinnerStyles.grow.interval,
    color: "cyan"
  });

  await withSpinner(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }, {
    text: "Step 3 of 3",
    frames: spinnerStyles.arc.frames,
    interval: spinnerStyles.arc.interval,
    color: "magenta"
  });
  console.log("✅ All chained steps completed!");

  // Demo 4: Custom stream (e.g., to a mock stream for testing)
  console.log("\nDemo 4: Custom Stream (output to a mock stream)");
  const mockStream = {
    _buffer: "",
    write(chunk) { this._buffer += chunk; },
    clearLine() { this._buffer = ""; },
    cursorTo() {},
    getOutput() { return this._buffer; }
  };
  const spinner4 = new Spinner({
    text: "Writing to mock stream",
    frames: spinnerStyles.circle.frames,
    interval: spinnerStyles.circle.interval,
    stream: mockStream,
    color: "red"
  });
  spinner4.start();
  await new Promise(resolve => setTimeout(resolve, 2000));
  spinner4.stop("✅ Mock stream operation done!");
  console.log("Mock stream content (last line):", mockStream.getOutput().split('\n').pop());

  console.log("\n--- Demo Complete ---");
}

runDemo();