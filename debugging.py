''' Packages & Debugging
    (1) Python Packages & Core Package
    (2) Package Manager & External Package
    (3) Debugging
'''

from PIL import Image
import turtle
# from turtle import Screen, Turtle, done
print("===== Python Packages & Core Package =====")
''' Python Packages/Modules: Core, File and External '''
# Core Packages > https://docs.python.org/3/library/


# Core package
t = turtle.Turtle()
t.shape("turtle")
t.speed(2)
t.circle(150)

turtle.done()

'''
screen = Screen()
screen.bgcolor("white")

t = Turtle()
t.speed(0)

t.penup()
t.goto(0, -100)
t.pendown()
t.color("#D2691E")  # crust color
t.begin_fill()
t.circle(150)
t.end_fill()

t.penup()
t.goto(0, -80)
t.pendown()
t.color("#FFD700")  # cheese color
t.begin_fill()
t.circle(130)
t.end_fill()


def draw_pepperoni(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color("#B22222")
    t.begin_fill()
    t.circle(20)
    t.end_fill()


positions = [(-50, 20), (40, 50), (-30, -40), (60, -20), (0, 60)]
for pos in positions:
    draw_pepperoni(pos[0], pos[1])

t.hideturtle()

done()
'''

print("-----")
my_file = open("material/message.txt", "r")
try:
    content = my_file.read()
    print("content:", content)
finally:
    my_file.close()

# with - Context Manager
with open("material/message.txt", "r") as your_file:
    your_content = your_file.read()
    print("your_content:", your_content)

print("DONE")


print("===== Package Manager & External Package =====")
''' Package Manager
    Python > pip pipenv
    NodeJS > npm yarn
    PHP > composer
    MacOS > brew
'''
# External Package > https://pypi.org/

with Image.open("material/logo.png") as img_obj:
    resized_img = img_obj.resize((200, 200))
    resized_img.show()
    resized_img.save("material/sample.png")


print("===== Debugging =====")


def get_summary(*args):  # DEFINE
    total_amount = 0
    for a in args:
        total_amount += a
    # return total_amount
        return total_amount  # find the bug via debugging


test = 100
result = get_summary(1, 2, 3, 4, 5)  # CALL
print("result:", result)
