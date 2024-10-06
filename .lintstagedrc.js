module.exports = {
  '*.{js,jsx,ts,tsx,cjs}': [
    'eslint -c ./.eslintrc-ci.json --fix',
    'prettier --write',
  ],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{md,html}': ['prettier --write'],
};
