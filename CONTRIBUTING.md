# Contributing to cli-spinner-lite

We welcome contributions to `cli-spinner-lite`! Before you start, please read this guide to understand our development process and how to contribute effectively.

## Table of Contents

*   [Code of Conduct](#code-of-conduct)
*   [How to Contribute](#how-to-contribute)
    *   [Reporting Bugs](#reporting-bugs)
    *   [Suggesting Enhancements](#suggesting-enhancements)
    *   [Pull Requests](#pull-requests)
*   [Development Setup](#development-setup)
*   [Coding Guidelines](#coding-guidelines)
*   [License](#license)

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Documentation

*   **API Reference:** Detailed documentation for the `Spinner` class and `withSpinner` utility can be found in [API.md](docs/API.md).
*   **Roadmap:** See our future plans and ideas in [roadmap.md](roadmap.md).

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on our [GitHub Issues page](https://github.com/Nom-nom-hub/cli-spinner-lite/issues). When reporting a bug, please include:

*   A clear and concise description of the bug.
*   Steps to reproduce the behavior.
*   Expected behavior.
*   Actual behavior.
*   Screenshots or console output if applicable.
*   Your Node.js version and operating system.

### Suggesting Enhancements

We love new ideas! If you have a suggestion for an enhancement or a new feature, please open an issue on our [GitHub Issues page](https://github.com/Nom-nom-hub/cli-spinner-lite/issues). Please describe:

*   The problem you're trying to solve.
*   How your suggested enhancement would solve it.
*   Any alternative solutions you've considered.

### Pull Requests

We welcome pull requests! To submit a pull request:

1.  **Fork** the repository.
2.  **Clone** your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/cli-spinner-lite.git
    cd cli-spinner-lite
    ```
3.  **Create a new branch** for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/fix-description
    ```
4.  **Make your changes** and ensure they adhere to our [Coding Guidelines](#coding-guidelines).
5.  **Test your changes** thoroughly.
6.  **Commit your changes** with a clear and concise commit message.
    ```bash
    git commit -m "feat: Add new awesome feature"
    # or
    git commit -m "fix: Resolve bug in spinner animation"
    ```
7.  **Push your branch** to your forked repository.
    ```bash
    git push origin feature/your-feature-name
    ```
8.  **Open a Pull Request** on the main repository. Provide a detailed description of your changes.

## Development Setup

To set up your development environment:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Nom-nom-hub/cli-spinner-lite.git
    cd cli-spinner-lite
    ```
2.  **Install dependencies:** (There are no external dependencies for the core package, but you might need npm for running examples or testing.)
    ```bash
    npm install
    ```
3.  **Run the demo:**
    ```bash
    npm run demo
    ```

## Coding Guidelines

*   **JavaScript Standard Style:** Adhere to a consistent coding style. We recommend using a linter like ESLint with a popular style guide (e.g., Standard JS).
*   **ES6+ Syntax:** Utilize modern JavaScript features.
*   **Clear and Concise Code:** Write code that is easy to understand and maintain.
*   **Comments:** Add comments where necessary to explain complex logic.
*   **Tests:** While not strictly enforced for every minor change, consider adding tests for new features or bug fixes to ensure stability.

## License

By contributing to cli-spinner-lite, you agree that your contributions will be licensed under its ISC License.