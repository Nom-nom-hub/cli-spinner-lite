declare module "cli-spinner-lite" {
  type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" |
               "brightRed" | "brightGreen" | "brightYellow" | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite";

  interface SpinnerOptions {
    text?: string;
    interval?: number;
    frames?: string[];
    spinnerColor?: Color;
    textColor?: Color;
    stream?: NodeJS.WritableStream;
  }

  class Spinner {
    constructor(options?: SpinnerOptions);
    start(): void;
    stop(message?: string): void;
    updateText(newText: string): void;
  }

  function withSpinner<T>(
    asyncFunction: (spinner: Spinner) => Promise<T>,
    options?: SpinnerOptions
  ): Promise<T>;

  export { Spinner, withSpinner };
}

declare module "cli-spinner-lite/spinnerStyles" {
  interface SpinnerStyle {
    frames: string[];
    interval: number;
  }

  interface SpinnerStyles {
    dots: SpinnerStyle;
    line: SpinnerStyle;
    bounce: SpinnerStyle;
    grow: SpinnerStyle;
    arc: SpinnerStyle;
    circle: SpinnerStyle;
    star: SpinnerStyle;
    dots2: SpinnerStyle;
    pipe: SpinnerStyle;
    hamburger: SpinnerStyle;
    arrow: SpinnerStyle;
    bouncingBar: SpinnerStyle;
  }

  const spinnerStyles: SpinnerStyles;
  export = spinnerStyles;
}