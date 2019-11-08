const express = require('express');
const router = express.Router();
const smarTender = require('../../smartender');
const { drinks, drinkOptions } = require('../../drinks');

router.get('/receipt', async (req, res, next) => {
  console.log(drinks);
  res.send(JSON.stringify(drinks));
});

router.get('/clean', async (req, res, next) => {
  smarTender.clean(5000).then(() => {
    res.send({
      status: 'success',
      command: 'clean',
      message: 'Cleaning SmarTender...',
    });
  }).catch(err => {
    res.send({
      status: 'failed',
      command: 'mix',
      message: err.message,
    });
  });
});

router.get('/clean/:time', async (req, res, next) => {
  const time = req.params.time;
  smarTender.clean(time).then(() => {
    res.send({
      status: 'success',
      command: 'clean',
      message: 'Cleaning SmarTender...',
    });
  }).catch(err => {
    res.send({
      status: 'failed',
      command: 'mix',
      message: err.message,
    });
  });
});

router.get('/mix/:drink', async (req, res, next) => {
  const drink = req.params.drink;
  if (!drinks[drink]) {
    res.send({
      status: 'failed',
      command: 'mix',
      message: 'Cocktail receipt does not exists!',
    });
  } else {
    smarTender.makeDrink(drinks[drink]).then(() => {
      res.send({
        status: 'success',
        command: 'mix',
        message: `Mixing ${drink}`,
      });
    }).catch(err => {
      res.send({
        status: 'failed',
        command: 'mix',
        message: err.message,
      })
    });
  }
});

router.get('/resetSmarTender', async (req, res, next) => {
  smarTender.reset();
});

router.get('/checkPipes', async (req, res, next) => {
  smarTender.checkPipes().then(() => {
    res.send({
      status: 'success',
      command: 'checkPipes',
      message: 'Checking pipes...',
    });
  }).catch(err => {
    res.send({
      status: 'failed',
      command: 'checkPipes',
      message: err.message,
    });
  });
});

module.exports = router;