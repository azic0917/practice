/* MITASK-J

Savol: Shunday function yozing, u parametridagi array
ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
*/

// Masalaning yechimi:

function majorityElement(arr) {
    let count = {};

    for (let num of arr) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    let mostFrequency = 0;
    let mostFrequentNumber = null;

    for (let key in count) {
        if (count[key] > mostFrequency) {
            mostFrequency = count[key];
            mostFrequentNumber = key;
        }
    }

    return mostFrequentNumber;
}

const result = majorityElement([1, 2, -3, 6, 5, 4, -3, 4, -3]);
console.log(result);


/* MITASK-H

Savol: shunday function tuzing, u integerlardan iborat arrayni
argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

/* Masalaning yechimi:

function getPositive(arr) {
    let positive = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        }
    }
    return positive.join("");
}

const result = getPositive([6, -3, 15, 2, 9]);
console.log(`"${result}"`);
*/

/* MITASK-F

Savol: Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib,
agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/

/* Masalaning yechimi:

function findDoublers(str) {
    let checked = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (checked.includes(char)) {
            return true;
        }
        checked.push(char);
    }
    return false;
}

const result = findDoublers("application");
console.log(result);
*/

/* MITASK-E

Savol: Shunday function tuzing, u bitta string
argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

/* Masalaning yechimi:

function getReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const result = getReverse("encapsulation");
console.log(result);
*/

/* MITASK-D

Savol: Shunday function tuzingki unga integerlardan iborat array pass
bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

/* Masalaning yechimi:

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
*/

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