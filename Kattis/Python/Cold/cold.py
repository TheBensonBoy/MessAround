#! python3

#Cold-puter Scince

def main():
    # Kattis/user inputs the amount of days we will evaluate, and won't be used elsewhere in the code
    days = int(input())

    # Declare the amount of cold days so far
    amount = 0

    # User input for temps
    temp = list(map(float, input().split(' ')))

    # This is for deciphering how many days are below zero
    for t in temp:
        if t < 0:
            amount += 1
    print(amount)

main()