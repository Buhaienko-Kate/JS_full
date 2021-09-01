const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
  const eventsListElement = document.querySelector('.events-list');
  eventsListElement.innerHTML += `<span style = "color:${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// divElem.addEventListener('click', logGreenDiv);
// pElem.addEventListener('click', logGreenP);
// spanElem.addEventListener('click', logGreenSpan);

// divElem.addEventListener('click', logGreyDiv, { capture: true });
// pElem.addEventListener('click', logGreyP, true);
// spanElem.addEventListener('click', logGreySpan, true);

const attachEventList = () => {
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);

  divElem.addEventListener('click', logGreyDiv, { capture: true });
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
};

const clickAttachList = attachEventList;
const contentLoaded = attachEventList;
attachHandlersBtn.addEventListener('click', clickAttachList);
attachHandlersBtn.addEventListener('DOMContentLoaded', contentLoaded);

const removeEventList = () => {
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);

  divElem.removeEventListener('click', logGreyDiv, { capture: true });
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);
};
removeEventList();
const clickRemoveList = removeEventList;
removeHandlersBtn.addEventListener('click', clickRemoveList);

const clearEventList = () => {
  document.querySelector('.events-list').innerHTML = '';
};
const clickClearList = clearEventList;
clearBtn.addEventListener('click', clickClearList);

// pElem.addEventListener('click', event => {
//   logGreenP();
//   event.stopPropagation();
// });

// elem.addEventListener('click', () => {
//   console.log('div1');
// });

// const handler = () => {
//   console.log('div');
// };
// elem.addEventListener('click', handler);
// elem.removeEventListener('click', handler);
