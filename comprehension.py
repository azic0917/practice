''' Comprehension
    (1) What is comprehension & list comp.
    (2) set and dictionary comp.
'''

print("===== What is comprehension & list comprehension =====")
# Comprehension acts like spread operator!

''' Comprehension general syntax:
    a) *iterable
    b) <expression> for item in iterable
    c) <expression> for item in iterable <condition>
'''

# list comp.
numbers = [1, 2, 4, 2, 1, 20]
list_numbers = [*numbers]  # a version
# list_numbers = numbers

print("list_numbers:", list_numbers)
print(numbers is list_numbers)
print(id(numbers), id(list_numbers))

print("-----")
people = [("Robert", 20), ("Steve", 19), ("Joseph", 25)]
# list_people = [person[0] for person in people]  # b version
list_people = [person[1] for person in people]
print("list_people:", list_people)

print("-----")
cars = [
    ("Ferrari", 78),
    ("Toyota", 87),
    ("Audi", 116),
    ("BMW", 109),
    ("Pagani", 33)
]
list_cars = [car[0] for car in cars if car[1] > 80]  # c version
print("list_cars:", list_cars)
