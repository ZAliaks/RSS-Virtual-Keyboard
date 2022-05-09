const keyRow1 = [
  ['backquote', 'ё', 'Ё', '`', '~', 192],
  ['digit1', '1', '!', '1', '!', 49],
  ['digit2', '2', '"', '2', '@', 50],
  ['digit3', '3', '№', '3', '#', 51],
  ['digit4', '4', ';', '4', '$', 52],
  ['digit5', '5', '%', '5', '%', 53],
  ['digit6', '6', ':', '6', '^', 54],
  ['digit7', '7', '?', '7', '&', 55],
  ['digit8', '8', '*', '8', '*', 56],
  ['digit9', '9', '(', '9', '(', 57],
  ['digit0', '0', ')', '0', ')', 48],
  ['digit-', '-', '-', '-', '-', 189],
  ['equal', '=', '+', '=', '+', 187],
  ['backspace', 'backspace', 'backspace', 'backspace', 'backspace', 8],
];

const keyRow2 = [
  ['tab', 'tab', 'tab', 'tab', 'tab', 9],
  ['keyQ', 'й', 'Й', 'q', 'Q', 81],
  ['keyW', 'ц', 'Й', 'w', 'W', 87],
  ['keyE', 'у', 'У', 'e', 'E', 69],
  ['keyR', 'к', 'К', 'r', 'R', 82],
  ['keyT', 'е', 'Е', 't', 'T', 84],
  ['keyY', 'н', 'Н', 'y', 'Y', 89],
  ['keyU', 'г', 'Г', 'u', 'U', 85],
  ['keyI', 'ш', 'Ш', 'i', 'I', 73],
  ['keyO', 'щ', 'Щ', 'o', 'O', 79],
  ['keyP', 'з', 'З', 'p', 'P', 80],
  ['bracketLeft', 'х', 'Х', '[', '{', 219],
  ['bracketRight', 'ъ', 'Ъ', ']', '}', 221],
  ['del', 'del', 'del', 'del', 'del', 46],
];

const keyRow3 = [
  ['capsLock', 'capsLock', 'capsLock', 'capsLock', 'capsLock', 20],
  ['keyA', 'ф', 'Ф', 'a', 'A', 65],
  ['keyS', 'ы', 'Ы', 's', 'S', 83],
  ['keyD', 'в', 'В', 'd', 'D', 68],
  ['keyF', 'а', 'А', 'f', 'F', 70],
  ['keyG', 'п', 'П', 'g', 'G', 71],
  ['keyH', 'р', 'Р', 'h', 'H', 72],
  ['keyJ', 'о', 'О', 'j', 'J', 74],
  ['keyK', 'л', 'Л', 'k', 'K', 75],
  ['keyL', 'д', 'Д', 'l', 'L', 76],
  ['semicolon', 'ж', 'Ж', ';', ':', 186],
  ['quote', 'э', 'Э', '&rsquo;', '&quot;', 222],
  ['enter', 'enter', 'enter', 'enter', 'enter', 13],
];

const keyRow4 = [
  ['shiftLeft', 'shift', 'shift', 'shift', 'shift', 16],
  ['keyZ', 'я', 'Я', 'z', 'Z', 90],
  ['keyX', 'ч', 'Ч', 'x', 'X', 88],
  ['keyC', 'с', 'С', 'c', 'C', 67],
  ['keyV', 'в', 'В', 'v', 'V', 86],
  ['keyB', 'и', 'И', 'b', 'B', 66],
  ['keyN', 'т', 'Т', 'n', 'N', 78],
  ['keyM', 'ь', 'Ь', 'm', 'M', 77],
  ['comma', 'б', 'Б', ',', '<', 188],
  ['dot', 'ю', 'Ю', '.', '>', 190],
  ['slash', '.', ',', '/', '?', 191],
  ['arrowTop', '&uarr;', '&uarr;', '&uarr;', '&uarr;', 38],
  ['shiftRight', 'shift', 'shift', 'shift', 'shift', 16],
];

const keyRow5 = [
  ['ctrl', 'ctrl', 'ctrl', 'ctrl', 'ctrl', 17],
  ['win', 'win', 'win', 'win', 'win', 91],
  ['alt', 'alt', 'alt', 'alt', 'alt', 18],
  ['space', '', '', '', '', 32],
  ['alt', 'alt', 'alt', 'alt', 'alt', 18],
  ['arrowLeft', '&larr;', '&larr;', '&larr;', '&larr;', 37],
  ['arrowBottom', '&darr;', '&darr;', '&darr;', '&darr;', 40],
  ['arrowRight', '&rarr;', '&rarr;', '&rarr;', '&rarr;', 39],
  ['ctrl', 'ctrl', 'ctrl', 'ctrl', 'ctrl', 17],
];

const addKeys = [
  'shift',
  'capsLock',
  'backspace',
  'del',
  '',
  'tab',
  'alt',
  'ctrl',
  'win',
  'enter',
];

const rows = [keyRow1, keyRow2, keyRow3, keyRow4, keyRow5];
const pressedKeys = [];

const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const infBlock = document.createElement('div');
infBlock.className = 'info';
infBlock.innerText = 'OS: Windows. Change language: ctr + shift.';
container.append(infBlock);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
container.append(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);

const row = document.createElement('div');
row.className = 'row';
for (let i = 1; i <= 5; i += 1) {
  keyboard.append(row.cloneNode(true));
}

const rowNumbers = document.querySelectorAll('.row');
for (let j = 0; j < rowNumbers.length; j += 1) {
  rowNumbers[j].classList.add(`row${j + 1}`);
}

const button = document.createElement('div');
button.className = 'button';

const langButton = document.createElement('div');

const caseSymbol = document.createElement('div');
caseSymbol.className = 'case';

const getSymbol = (symbol, caseUpLow) => {
  const cases = caseSymbol.cloneNode(true);
  cases.classList.add(caseUpLow);
  if (cases.classList.contains('up')) cases.classList.add('hidden');
  cases.innerHTML = symbol;
  return cases;
};

const getLang = (lang, keyRow, a) => {
  const newButton = langButton.cloneNode(true);
  newButton.classList.add(lang);
  const langIncrement = lang === 'rus' ? 0 : 2;
  newButton.append(getSymbol(keyRow[a][2 + langIncrement], 'up'));
  newButton.append(getSymbol(keyRow[a][1 + langIncrement], 'down'));
  return newButton;
};

const setLng = () => {
  const lang = localStorage.getItem('Lang');
  const eng = document.querySelectorAll('.eng');
  const rus = document.querySelectorAll('.rus');
  if (lang === 'rus') {
    eng.forEach((item) => {
      item.classList.remove('hidden');
    });
    rus.forEach((item) => {
      item.classList.add('hidden');
    });
  } else {
    eng.forEach((item) => {
      item.classList.add('hidden');
    });
    rus.forEach((item) => {
      item.classList.remove('hidden');
    });
  }
};

const addActiveClass = (btnValue) => {
  for (let i = 0; i < 5; i += 1) {
    const keyRow = rows[i];
    for (let j = 0; j < keyRow.length; j += 1) {
      if (btnValue.includes(keyRow[j][5]) || btnValue.includes(keyRow[j][1])) {
        const activeButton = document.querySelector(`.${keyRow[j][0]}`);
        activeButton.classList.add('active');
      }
    }
  }
};

const removeActiveClass = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((btn) => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  });
};

const changeCaps = () => {
  const firstDown = document.querySelector('.down');
  const down = document.querySelectorAll('.down');
  const up = document.querySelectorAll('.up');
  if (firstDown.classList.contains('hidden')) {
    down.forEach((elem) => {
      elem.classList.remove('hidden');
    });
    up.forEach((elem) => {
      elem.classList.add('hidden');
    });
  } else {
    down.forEach((elem) => {
      elem.classList.add('hidden');
    });
    up.forEach((elem) => {
      elem.classList.remove('hidden');
    });
  }
};

const onButtonDown = (event) => {
  const btnValue = event.target.innerHTML;
  let text = textArea.value;
  if (btnValue === 'Shift') {
    changeCaps();
  }
  if (btnValue === 'capsLock') {
    changeCaps();
  }
  if (btnValue === 'backspace') {
    text = text.slice(0, -1);
    text = text.slice(0, textArea.selectionStart) + text.slice(textArea.selectionEnd);
    textArea.value = text;
  }
  if (btnValue === 'del') {
    text = text.slice(0, -1);
    textArea.value = text;
  }
  if (btnValue === '') {
    textArea.value = 'text';
  }
  if (btnValue === 'tab') {
    textArea.value += '\t';
  }
  if (btnValue === 'enter') {
    textArea.value += '\n';
    textArea.value.replace(/\n/g, '<br>');
  }
  if (!addKeys.includes(btnValue)) {
    textArea.setRangeText(
      btnValue,
      textArea.selectionStart,
      textArea.selectionEnd,
      'end',
    );
    window.getSelection().removeAllRanges();
  }
};

const onButtonUp = (event) => {
  removeActiveClass();
  if (event.target.innerHTML === 'shift') {
    changeCaps();
  }
};

const getBtn = () => {
  for (let i = 0; i < 5; i += 1) {
    const keyRow = rows[i];
    for (let j = 0; j < keyRow.length; j += 1) {
      const newButton = button.cloneNode(true);
      newButton.classList.add(keyRow[j][0]);
      newButton.addEventListener('mousedown', onButtonDown);
      newButton.addEventListener('mouseup', onButtonUp);
      newButton.append(getLang('rus', keyRow, j));
      newButton.append(getLang('eng', keyRow, j));
      document.querySelector(`.row${i + 1}`).append(newButton);
    }
    setLng();
  }
};

document.addEventListener(
  'keydown',
  (event) => {
    document.querySelector('textarea').focus();
    const keyName = event.key;
    const lastPressed = pressedKeys[pressedKeys.length - 1];
    pressedKeys.push(event.keyCode);
    addActiveClass(pressedKeys);
    if (event.ctrlKey && keyName === 'Shift') {
      let lang = localStorage.getItem('Lang');
      lang = lang === 'rus' ? 'eng' : 'rus';
      localStorage.setItem('Lang', lang);
      setLng();
    }
    if (event.shiftKey && lastPressed !== 16) {
      changeCaps();
    }
    if (keyName === 'Alt') {
      event.preventDefault();
    }
    if (keyName === 'Tab') {
      textArea.value += '\t';
      event.preventDefault();
    }
    if (keyName === 'CapsLock') {
      changeCaps();
    }
  },
  false,
);

document.addEventListener('keyup', () => {
  // console.log(pressedKeys);
  if (pressedKeys[pressedKeys.length - 1] === 16) {
    changeCaps();
  }
  while (pressedKeys.length > 0) {
    pressedKeys.pop();
    removeActiveClass();
  }
});

getBtn();
