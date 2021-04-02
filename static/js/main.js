'use strict';

exports.postAceInit = (hookName, args) => {
  // if the button already exists, don't write it again..
  if ($('#ep_padwoman_button_span').length !== 0) return;

  const link = clientVars.ep_padwoman_button.link;
  const text = clientVars.ep_padwoman_button.text;
  const before = clientVars.ep_padwoman_button.before;
  const after = clientVars.ep_padwoman_button.after;
  const classes = clientVars.ep_padwoman_button.classes;

  const button = `<li>
      <a class='${classes}' href='${link}'>
        <span id='ep_padwoman_button_span' class='buttonicon'>${text}</span>
      </a>
    </li>`;
  const $editBar = $('#editbar');

  if (after) {
    $editBar.contents().find(after).after(button);
  } else {
    $editBar.contents().find(before).before(button);
  }

  $('#ep_padwoman_button_span').css({
    'background-image': 'none',
    'width': 'auto',
    'color': '#666',
    'font-size': '16px',
    'font-weight': '800',
  });
};
