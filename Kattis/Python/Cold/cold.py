#! python3

#Cold-puter Scince

def main():
    # Kattis/user inputs the amount of days we will evaluate
    days = int(input())

    # Declare the amount of cold days so far
    amount = 0

    # We are determining how many days are below zero
    for temp in range(days):
        temp = list(map(int, input().split(' ')))

        if temp < 0:
            print(amount)

main()