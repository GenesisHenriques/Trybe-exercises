trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.

trybe_course.append("Ciencia da Computação");


# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".

trybe_course[0] = "Fundamentos"

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

var = set()
var.add("Genesis")

# print(var)


info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?

# print(info['nota'])

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.

info["recorrente"] = "sim"

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

del info["origem"]

# print(info)

# 12 Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?

my_list = [20, 20, 1, 2]

quantity_numbers = dict() # um dicionario

for num in my_list:
  if num in quantity_numbers:
    quantity_numbers[num] += 1
  else:
    quantity_numbers[num] = 1

# print(quantity_numbers)

n = 10
last, next = 0, 1

while last < n:
    print(last)
    last, next = next, last + next
