module.exports = {
  'src/**/*.{vue,ts,js,json,jsx,tsx}': ['eslint --fix .', 'git add .'],
  'src/**/*.{vue,ts,js,jsx,tsx,json,css,scss,md}': ['prettier --write .', 'git add .'],
}
