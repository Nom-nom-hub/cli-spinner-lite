declare module "cli-spinner-lite" {
  interface SpinnerOptions {
    text?: string;
    interval?: number;
    frames?: string[];
    color?: string;
    stream?: NodeJS.WritableStream;
  }

  class Spinner {
    constructor(options?: SpinnerOptions);
    start(): void;
    stop(message?: string): void;
    updateText(newText: string): void;
  }

  function withSpinner<T>(
    asyncFunction: () => Promise<T>,
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
  }

  const spinnerStyles: SpinnerStyles;
  export = spinnerStyles;
}