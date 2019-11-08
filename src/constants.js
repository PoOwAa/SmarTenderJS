// Signal for enabled relay
const RELAY_ON = 0;
// Signal for disabled relay
const RELAY_OFF = 1;

// Milliliter / millisecond
const FLOW_RATE = 10 / 1000;

// Pin BCM
const PIPE_1 = 18;
const PIPE_2 = 23;
const PIPE_3 = 24;
const PIPE_4 = 25;
const PIPE_5 = 4;
const PIPE_6 = 17;

const PIPES = {
  PIPE_1,
  PIPE_2,
  PIPE_3,
  PIPE_4,
  PIPE_5,
  PIPE_6
};

module.exports = {
  RELAY_OFF,
  RELAY_ON,
  PIPES,
  FLOW_RATE
};
