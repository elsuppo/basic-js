const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = this.alphabet;
    const upperMessage = str.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < upperMessage.length; i++) {
      const currentSymbol = upperMessage[i];

      if (alphabet.includes(currentSymbol)) {
        const messageCharCode = currentSymbol.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = upperKey[j % upperKey.length].charCodeAt(0) - 'A'.charCodeAt(0);

        const encryptedCharCode = (messageCharCode + keyCharCode) % 26;

        const encryptedSymbol = alphabet[encryptedCharCode];

        result += encryptedSymbol;

        j++;
      } else {
        result += currentSymbol;
      }
    }

    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = this.alphabet;
    const upperMessage = str.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < upperMessage.length; i++) {
      const currentSymbol = upperMessage[i];

      if (alphabet.includes(currentSymbol)) {
        const messageCharCode = currentSymbol.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = upperKey[j % upperKey.length].charCodeAt(0) - 'A'.charCodeAt(0);

        const decryptedCharCode = (messageCharCode - keyCharCode + 26) % 26;

        const decryptedSymbol = alphabet[decryptedCharCode];

        result += decryptedSymbol;

        j++;
      } else {
        result += currentSymbol;
      }
    }

    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
