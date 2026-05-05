'''
MITASK-I

Savol: Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: get_digits("m14i1t") return qiladi "141"
'''

# Masalaning yechimi:


def get_digits(str):
    digits = ""

    for char in str:
        if char in "0123456789":
            digits += char

    return digits


result = get_digits("q9w2e7r5")
print(result)


'''
MITASK-G

Savol: Shunday function tuzingki unga integerlardan iborat array pass bolsin 
va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.
'''

'''
# Masalaning yechimi:


def get_highest_index(arr):
    highest_value = arr[0]
    highest_index = 0

    for i in range(len(arr)):
        if arr[i] > highest_value:
            highest_value = arr[i]
            highest_index = i

    return highest_index


result = get_highest_index([6, -3, 15, 2, 15, 9])
print(result)
'''
