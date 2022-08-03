import sys

students = []

for _ in range(int(input())):
    name, day, month, year = input().split()
    students.append([name, int(day), int(month), int(year)])

print(students)
