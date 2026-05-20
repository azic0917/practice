'''
MITASK-O

Savol: Shunday function yozing, u har xil valuelardan iborat array qabul 
qilsin va List ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculate_summary([10, "10", {"son": 10}, True, 35]) return 45
'''

# Masalaning yechimi:


def calculate_summary(arr):
    total = 0

    for item in arr:
        if type(item) == int:
            total += item

    return total


result = calculate_summary([10, "10", {"son": 10}, True, 35])
print(result)

'''
MITASK-M

Savol: Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, 
orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindrom_check("dad") return True;  palindrom_check("son") return False;
'''

'''
# Masalaning yechimi:


def palindrom_check(str):
    return str == str[::-1]


result = palindrom_check("eye")
print(result)
'''

'''
MITASK-K

Savol: Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: find_longest("I come from Uzbekistan") return "Uzbekistan"
'''

'''
# Masalaning yechimi:


def find_longest(str):
    words = str.split()
    longest = ""

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest


result = find_longest(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit")
print(result)
'''

'''
MITASK-I

Savol: Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: get_digits("m14i1t") return qiladi "141"
'''

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
