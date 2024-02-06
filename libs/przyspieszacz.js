const procesor = require('process');

const przyspieszacz = (key) => {
  const argWithValue = procesor.argv.find(arg => arg.startsWith(`--${key}=`));

  if (argWithValue) {
    return argWithValue.split('=')[1];
  }

  return procesor.argv.includes(`--${key}`);
};

module.exports = przyspieszacz;