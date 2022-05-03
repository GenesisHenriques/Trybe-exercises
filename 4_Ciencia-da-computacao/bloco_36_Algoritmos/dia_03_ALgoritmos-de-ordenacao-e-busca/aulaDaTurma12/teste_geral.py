from operator import itemgetter, attrgetter

melhor_turma = [
  ("Felipe Gomes", "A", 15),
  ("Patricia", "B", 17),
  ("Marcus", "B", 19),
  ("Bruno Algusto", "C", 18),
]

"""itemgetter -> ordena pelo 2(numero usado no exemplo) item de cada item do array"""
# reverse=True -> coloca em ordem decrescente
print(sorted(melhor_turma, key=itemgetter(2), reverse=True))

# msg = sorted("Estude programação hoje e ganhe dinheiro amanhã".split(), key=str.lower)
# print(msg)
