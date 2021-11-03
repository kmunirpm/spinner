function spinner(char) {
  process.stdout.write('\r'+char);
}
setTimeout(spinner, 100, "|");
setTimeout(spinner, 300, "/");
setTimeout(spinner, 500, "-");
setTimeout(spinner, 700, "\\");
setTimeout(spinner, 900, "|\n");