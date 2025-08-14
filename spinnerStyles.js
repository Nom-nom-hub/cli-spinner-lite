const spinnerStyles = {
  dots: {
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    interval: 80
  },
  line: {
    frames: ["-", "\\", "|", "/"],
    interval: 100
  },
  bounce: {
    frames: ["⠁", "⠂", "⠄", "⠂", "⠁"],
    interval: 120
  },
  grow: {
    frames: [" ", "▃", "▄", "▅", "▆", "▇", "█", "▇", "▆", "▅", "▄", "▃"],
    interval: 90
  },
  arc: {
    frames: ["◜", "◠", "◝", "◞", "◡", "◟"],
    interval: 100
  },
  circle: {
    frames: ["◐", "◓", "◑", "◒"],
    interval: 120
  },
  star: {
    frames: ["✶", "✸", "✹", "✺", "✹", "✸"],
    interval: 150
  },
  dots2: {
    interval: 80,
    frames: [
      "⣾",
      "⣽",
      "⣻",
      "⢿",
      "⡿",
      "⣟",
      "⣯",
      "⣷"
    ]
  },
  pipe: {
    interval: 100,
    frames: [
      "┤",
      "┘",
      "┴",
      "└",
      "├",
      "┌",
      "┬",
      "┐"
    ]
  },
  hamburger: {
    interval: 100,
    frames: [
      "☱",
      "☲",
      "☴"
    ]
  },
  arrow: {
    interval: 100,
    frames: [
      "←",
      "↖",
      "↑",
      "↗",
      "→",
      "↘",
      "↓",
      "↙"
    ]
  },
  bouncingBar: {
    interval: 80,
    frames: [
      "[    ]",
      "[=   ]",
      "[==  ]",
      "[=== ]",
      "[====]",
      "[ ===]",
      "[  ==]",
      "[   =]",
      "[    ]",
      "[   =]",
      "[  ==]",
      "[ ===]",
      "[====]",
      "[=== ]",
      "[==  ]",
      "[=   ]"
    ]
  }
};

module.exports = spinnerStyles;