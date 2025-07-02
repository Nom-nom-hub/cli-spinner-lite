class Spinner {
  constructor({ text = "", interval = 100, frames = ["-", "\\", "|", "/"], color = "white", stream = process.stdout } = {}) {
    this.text = text;
    this.interval = interval;
    this.frames = frames;
    this.color = color;
    this.stream = stream;
    this.currentFrame = 0;
    this.timer = null;
  }

  start() {
    if (this.timer) {
      return;
    }

    this.stream.write("\x1B[?25l"); // Hide cursor

    const animate = () => {
      try {
        const frame = this.frames[this.currentFrame % this.frames.length];
        const colorCode = this._getColorCode(this.color);
        this.stream.clearLine(0);
        this.stream.cursorTo(0);
        this.stream.write(`${colorCode}${frame} ${this.text}\x1B[0m`); // Reset color
        this.currentFrame++;
      } catch (error) {
        this.stop(`Error during animation: ${error.message}`);
      }
    };

    this.timer = setInterval(animate, this.interval);
  }

  stop(message) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.stream.clearLine(0);
    this.stream.cursorTo(0);
    this.stream.write("\x1B[?25h"); // Show cursor
    if (message) {
      this.stream.write(`${message}\n`);
    }
  }

  updateText(newText) {
    this.text = newText;
  }
  _getColorCode(colorName) {
    const colors = {
      black: "\x1B[30m",
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
      cyan: "\x1B[36m",
      white: "\x1B[37m",
      gray: "\x1B[90m",
    };
    return colors[colorName.toLowerCase()] || colors.white;
  }
}

async function withSpinner(asyncFunction, options = {}) {
  const spinner = new Spinner(options);
  spinner.start();
  try {
    const result = await asyncFunction();
    spinner.stop("✅ Operation completed successfully!");
    return result;
  } catch (error) {
    spinner.stop(`❌ Operation failed: ${error.message}`);
    throw error;
  }
}

module.exports = { Spinner, withSpinner };