def sumNumbers(num, total):
    if num == 0:
        return total
    else:
        new_total = total + num
        return sumNumbers(num - 1, new_total)


print(sumNumbers(4, 0))



def sum_recursivo_trybe(num):
    if num == 0:
        return 0
    else:
        return num + sum_recursivo_trybe(num - 1)


print(sum_recursivo_trybe(4))
