const cron = require('node-cron');

cron.schedule('*/3 * * * * *', () => {
  console.log('running a task every 3 seconds');
});