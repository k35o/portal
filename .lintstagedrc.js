const path = require('path');

const buildCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ');

  return [`prettier --write ${files}`, `next lint --fix --file ${files}`];
}

module.exports = {
  'src/*.{js,jsx,ts,tsx}': [buildCommand],
};
