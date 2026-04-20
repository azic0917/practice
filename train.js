/* MITASK-B

Savol: Shunday function tuzing, u 1ta string parametrga ega bolsin, 
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// Masalaning yechimi:

function countDigits(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 0 && text[i] <= 9) {
            count++;
        }
    }
    return count;
}

const result = countDigits("a7k3z9q2m8x1p4r6wd");
console.log(result);

// =======================================================

/* MITASK-A

Savol: Shunday 2 parametrli function tuzing, 
hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

/* Masalaning yechimi:

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
*/