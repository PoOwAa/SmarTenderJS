const { Gpio } = require("onoff");
const { RELAY_OFF, RELAY_ON, PIPES, FLOW_RATE } = require("./constants");
const sleep = require("./sleep");
const logger = require("./logger")("smarTender");
const { drinkOptions } = require("./drinks");

class SmarTender {
  constructor() {
    this.pipes = {};
  }

  /**
   * Turn ON pipe
   *
   * @param {string} pipe
   */
  turnOnPipe(pipe) {
    this.pipes[pipe].writeSync(RELAY_ON);
  }

  /**
   * Turn OFF pipe
   *
   * @param {string} pipe
   */
  turnOffPipe(pipe) {
    this.pipes[pipe].writeSync(RELAY_OFF);
  }

  /**
   * Connecting to pipes
   */
  async init() {
    logger.debug("Initialize pipes...");
    for (const pipe in PIPES) {
      logger.debug(`${pipe} initailized`);
      this.pipes[pipe] = new Gpio(PIPES[pipe], "out");
      this.turnOffPipe(pipe);
      await sleep(300);
    }
  }

  /**
   * Turning ON/OFF pipe
   *
   * @param {String} pipe Name of pipe
   */
  switchPipe(pipe) {
    if (this.pipes[pipe].readSync() === 0) {
      logger.debug(`Turn [OFF] pipe`, pipe);
      this.turnOffPipe(pipe);
    } else {
      logger.debug(`Turn [ON] pipe`, pipe);
      this.turnOnPipe(pipe);
    }
  }

  /**
   * Flow drink from a specific pipe, for a specific time
   *
   * @param {string} pipe Name of pipe
   * @param {number} ms time in milliseconds
   */
  async flowDrink(pipe, ms = 0) {
    this.turnOnPipe(pipe);
    await sleep(ms);
    this.turnOffPipe(pipe);
  }

  /**
   * Turning ON and OFF every pipes with some delay, to have
   * a chance check it manually.
   */
  async checkPipes() {
    try {
      logger.debug("Checking pipes...");
      for (let pipe in PIPES) {
        this.turnOnPipe(pipe);
        await sleep(500);
      }
      for (let pipe in PIPES) {
        this.turnOffPipe(pipe);
        await sleep(500);
      }
      logger.debug("Pipes are working!");
    } catch (err) {
      logger.error(`Pipes are not working correctly`, err);
      process.exit(1);
    }
  }

  /**
   * Turn on every pipes in the same time, then turn them off
   *
   * @param {number} ms Time to clean
   */
  async clean(ms) {
    for (let pipe in PIPES) {
      this.turnOnPipe(pipe);
    }
    await sleep(ms);
    for (let pipe in PIPES) {
      this.turnOffPipe(pipe);
    }
  }

  /**
   * Creates a delicious coctail
   *
   * @param {Drink} drink Drink object
   */
  async makeDrink(drink) {
    const ingredients = drink.ingredients;
    for (let ingredient in ingredients) {
      for (let drinkPipe in drinkOptions) {
        if (ingredient === drinkPipe) {
          logger.debug("Flow ingredient", ingredient);
          this.flowDrink(
            drinkOptions[drinkPipe].pipe,
            ingredients[ingredient] * (1 / FLOW_RATE)
          );
        }
      }
    }
  }
}

const smarTender = new SmarTender();

module.exports = smarTender;
