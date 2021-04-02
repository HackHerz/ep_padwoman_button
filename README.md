# Add a button to the toolbar for padwoman

This is a fork of [ep_button_link](https://github.com/ether/ep_button_link).

## Installation
1. Install using /admin/plugins or npm install ep_padwoman_button
2. Edit settings in settings.json

## Configuration
Add the following to your settings.json
```
"ep_padwoman_button": { 
  "text": "Hello world",
  "link": "http://whatever.com",
  "classes": "grouped-left",
  "before": "li[data-key='showTimeSlider']",
  "after": "li[data-key='showTimeSlider']"
}
```
text = The text of the button, also supports HTML  
link = Where to link to  
classes = the css classes to apply to the button link  
before = The element to draw the button before in the DOM  
after = The element to draw the button after in the DOM

Use either before or after..
