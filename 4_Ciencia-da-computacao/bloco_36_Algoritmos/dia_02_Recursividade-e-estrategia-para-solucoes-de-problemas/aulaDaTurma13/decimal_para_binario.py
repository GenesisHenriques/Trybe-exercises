from difflib import restore


def denvent_to_binary(n):
    result, rest = divmod(n, 2)

    if n > 1:
        # divmod divide pr mim - divide n por 2...retorna uma tupla com o resultado da div e o resto
        # pega a tupla que retorna do divmod e separa em pequenas partes
        # depois pega a primeira parte (pq é uma tupla (chave, valor)) e joga no "result" e a segunda e joga no "rest"
        # rest acula todos os numero nele -> append
        denvent_to_binary(result)

    print(rest, end="")
    # end -> tira a quebra de linha


denvent_to_binary(10)
