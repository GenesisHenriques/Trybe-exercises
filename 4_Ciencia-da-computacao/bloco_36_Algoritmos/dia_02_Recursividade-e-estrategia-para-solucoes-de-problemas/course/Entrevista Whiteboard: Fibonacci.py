def fibonacci(num):
    cont = 0
    array = [0, 1]

    while cont < num:
        array.append(array[-1] + array[-2])
        print(array)
        cont += 1


fibonacci(5)


def fibonacciRecursivo(num):
    if num < 2:
        return num
    else:
        return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2)


print(fibonacciRecursivo(5))


def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


print(fibonacci_iter(5))
print(-1 * 7)
