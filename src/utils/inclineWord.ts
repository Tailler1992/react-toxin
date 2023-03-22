/**
 * Функция для склонения слов в зависимости от числителя
 * @param {number} number Числитель
 * @param {[string, string,string]} words Массив форм слов
 * @returns Слово в нужном склонении.
 */

const inclineWord = (number: number, words: [string, string, string]): string => {
    const num = Math.abs(number) % 100;
    let word = words[2];

    if (num > 10 && num < 20) {
        word = words[2];
    } else if (num % 10 === 1) {
        word = words[0];
    } else if ((num % 10 > 1) && (num % 10 < 5)) {
        word = words[1];
    }
    return word;
};
export default inclineWord;