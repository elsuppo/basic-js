function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let repeatingAddition = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    repeatingAddition += addition;
    if (i !== additionRepeatTimes - 1) {
      repeatingAddition += additionSeparator;
    }
  }

  let repeatingString = '';
  for (let i = 0; i < repeatTimes; i++) {
    repeatingString += str + repeatingAddition;
    if (i !== repeatTimes - 1) {
      repeatingString += separator;
    }
  }

  return repeatingString;
}

module.exports = {
  repeater
};
