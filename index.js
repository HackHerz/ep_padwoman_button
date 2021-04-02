'use strict';

const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = (hook, context, callback) => {
  let ep_padwoman_button = {};
  try {
    if (settings.ep_padwoman_button) {
      if (!settings.ep_padwoman_button.link) {
        console.warn('No link set for ep_padwoman_button, add ep_padwoman_button.link to settings.json');
        ep_padwoman_button.link = 'https://github.com/hackherz/ep_padwoman_button';
      } else {
        ep_padwoman_button.link = settings.ep_padwoman_button.link;
      }
      if (!settings.ep_padwoman_button.text) {
        ep_padwoman_button.text = 'NO TEXT SET';
        console.warn('No text set for ep_padwoman_button, add ep_padwoman_button.text to settings.json');
      } else {
        ep_padwoman_button.text = settings.ep_padwoman_button.text;
      }
      if (!settings.ep_padwoman_button.before) {
        ep_padwoman_button.before = "[data-key='showTimeSlider']";
        console.info('No before set for ep_padwoman_button, this may be intentional, ' +
          'add ep_padwoman_button.before to settings.json');
      } else {
        ep_padwoman_button.before = settings.ep_padwoman_button.before;
      }
      if (!settings.ep_padwoman_button.classes) {
        ep_padwoman_button.classes = 'grouped-left';
        console.info('No classes set for ep_padwoman_button, this may be intentional, ' +
        'add ep_padwoman_button.classes to settings.json');
      } else {
        ep_padwoman_button.classes = settings.ep_padwoman_button.classes;
      }
      if (!settings.ep_padwoman_button.after) {
        console.info('No after set for ep_padwoman_button, this may be intentional,' +
        ' add ep_padwoman_button.classes to settings.json');
      } else {
        ep_padwoman_button.after = settings.ep_padwoman_button.after;
      }
    } else {
      console.warn('Set ep_padwoman_button settings in settings.json, example is: "ep_padwoman_button":{ "link" : "https://github.com/hackherz/ep_padwoman_button", "text": "TEST"}');
      ep_padwoman_button = {};
      ep_padwoman_button.link = 'https://github.com/hackherz/ep_padwoman_button';
      ep_padwoman_button.text = 'NO TEXT SET';
      ep_padwoman_button.before = '.buttonicon-history';
      ep_padwoman_button.classes = 'grouped-right';
      console.warn('No link set for ep_padwoman_button, add ep_padwoman_button.link to settings.json');
      console.warn('No text set for ep_padwoman_button, add ep_padwoman_button.text to settings.json');
    }
  } catch (e) {
    // lovely try catch me if you can
  }
  return callback({ep_padwoman_button});
};
