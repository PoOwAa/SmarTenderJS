const pino = require('pino');

module.exports = name => {
  return pino({
    name,
    level: 'info',
    useLevelLabels: false,
    timestamp: false,
    prettyPrint: {
      levelFirst: true,
      colorize: true,
    },
  });
};
