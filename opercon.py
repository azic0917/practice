''' OPERATORS & CONDITIONS
    (1) Operators
    (2) Condition
    (3) Logical Operators
'''

print("===== Operators =====")
# + - > >= < <= == is * /   // % += -= **

a = 19
b = 5

# print("a > b", a > b)
# print("a * b", a * b)
# print("a / b", a / b)

result = a // b  # bo'lgandagi butun natija
left = a % b  # bo'lgandagi qoldiq
print(f"the result: {result} and left: {left}")

# a = a + 100
a += 100
print("a:", a)

print("b**2", b**2)  # b * b (2 times)
print("b**3", b**3)  # b * b (3 times)

print("="*5)

c = dict(name="Martin", age=35)
# c = dict(name="Martin", age=34)
d = dict(name="Martin", age=35)
e = c

print("c==d:", c == d)  # only values compared
print(id(c), id(d), id(e))

# data = c is d
print("c is d", c is d)  # reference compared
print("c is e", c is e)
