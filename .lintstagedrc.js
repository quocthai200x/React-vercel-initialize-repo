module.exports = {
  '*.{js,jsx,ts,tsx,cjs}': ['prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{md,html}': ['prettier --write'],
};
