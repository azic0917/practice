/* MITASK-D

Savol: Shunday function tuzingki unga integerlardan iborat array pass 
bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// Masalaning yechimi:

function getHighestIndex(arr) {
    let highest = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
            index = i;
        }
    }
    return index;
}

const result = getHighestIndex([6, -3, 15, 2, 15, 9]);
console.log(result);

/* MITASK-C

Savol: Shunday function tuzing, u 2ta string parametr ega bolsin,
hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

/* Masalaning yechimi:

function checkContent(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        let index = b.indexOf(a[i]);
        if (index === -1) {
            return false;
        }
        b = b.slice(0, index) + b.slice(index + 1);
    }
    return true;
}

const result = checkContent("carbonated", "rbcanodate");
console.log(result);
*/

/* MITASK-B

Savol: Shunday function tuzing, u 1ta string parametrga ega bolsin,
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

/* Masalaning yechimi:

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
*/

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