# cli-spinner-lite Roadmap

This document outlines potential features and improvements for the `cli-spinner-lite` package.

## Future Enhancements

*   **Customizable Colors:** [x] Allow users to specify colors for the spinner frames and text.
*   **Error Handling:** [x] Implement better error handling for stream operations and invalid configurations.
*   **Promise Integration:** [x] Provide a wrapper function that automatically handles spinner start/stop around a Promise.
*   **More Built-in Styles:** [x] Add a wider variety of predefined spinner animation styles.
*   **Node.js Stream Support:** [x] Enhance compatibility with various Node.js output streams beyond `process.stdout`.
*   **TypeScript Definitions:** [x] Add TypeScript declaration files (`.d.ts`) for better type checking and IDE support.
*   **Chaining Spinners:** [x] Support for displaying multiple spinners sequentially or concurrently.
*   **Performance Optimizations:** [ ] Further optimize rendering for extremely fast intervals or very long texts. (Considered ongoing, not a single task)
*   **Interactive Spinners:** [ ] Allow user input to interact with the spinner (e.g., pause/resume). (Deferred: Requires external dependencies or significant complexity, out of scope for zero-dependency constraint)
*   **Logging Integration:** [ ] Option to integrate with common logging libraries. (Deferred: Requires external dependencies, out of scope for zero-dependency constraint)