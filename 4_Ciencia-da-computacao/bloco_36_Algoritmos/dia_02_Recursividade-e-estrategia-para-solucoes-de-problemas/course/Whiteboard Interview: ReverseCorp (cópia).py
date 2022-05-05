def reverseList(list):
    cont = 1
    newList = []

    while cont < len(list):
        print(list[cont])
        newList.append(list[-1 * cont])
        cont += 1

    print(newList)


reverseList([1, 2, 3, 4, 5])


def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


print(reverse([1, 2, 3, 4, 5]))


def reverse_recursivo(list):
    if len(list) < 2:
        return list
    else:
        return reverse_recursivo(list[1:]) + [list[0]]


print(reverse_recursivo([1, 2, 3, 4, 5]))
