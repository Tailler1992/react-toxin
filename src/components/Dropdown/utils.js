const listOfWords = {
  guest: ['гость', 'гостя', 'гостей'],
  baby: ['младенец', 'младенца', 'младенцев'],
  bedroom: ['спальня', 'спальни', 'спальней'],
  bed: ['кровать', 'кровати', 'кроватей'],
  bathroom: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
};

const inclineWord = (number, words) => {
  const num = Math.abs(number) % 100;
  let word = words[2];

  if (num > 10 && num < 20) {
    word = words[2];
  } else if (num % 10 === 1) {
    word = words[0];
  } else if ((num % 10 > 1) && (num % 10 < 5)) {
    word = words[1];
  }
  return num + ' ' + word;
};

const trimText = (text) => {
  return text.length > 19 ? `${text.substr(0, 20).trim()}...` : text;
}

const createDescription = (arr) => {
  const newArr = [];
  const guest = arr[0].quantity + arr[1].quantity;
  const infants = arr[2].quantity;

  if (guest > 0) newArr.push(inclineWord(guest, listOfWords.guest))
  if (infants > 0) newArr.push(inclineWord(infants, listOfWords.baby))

  return newArr.join(', ');
}


export {createDescription};