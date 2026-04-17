/* MITASK-A

Savol: Shunday 2 parametrli function tuzing, 
hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// Masalaning yechimi:

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
};

const result = countLetter("i", "primitive");
console.log("result:", result);