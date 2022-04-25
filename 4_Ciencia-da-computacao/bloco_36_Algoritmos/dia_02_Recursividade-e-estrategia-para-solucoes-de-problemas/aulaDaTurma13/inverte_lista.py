# Dado uma lista de inteiros,
# inverta a posição dos seus elementos
# SEM utilizar o for e o while

n = [1, 2, 3, 4]
# saida [4, 3, 2, 1]


def reverse(n):
    if len(n) == 0:
        return n
    return [n[-1]] + reverse(n[:-1])
    # [1:2:5] inicio -> passos -> fim


print(reverse(n))
