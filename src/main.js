const smarTender = require('./smartender');
const logger = require('./logger')('main');
const { drinks } = require('./drinks');

(async () => {
  logger.info('Init SmarTender 1.0');
  await smarTender.init();
  // logger.info('Checking pipes');
  // await smarTender.checkPipes();
  // logger.info('Cleaning pipes');
  // await smarTender.clean(5000);
  logger.info('Creating coctails...');
  await smarTender.makeDrink(drinks.rumCoke);
})();
