# meu_numero = 0

# vwhile meu_numero < 42:
    # meu_numero += int(input("Digite seu numero"))


# print("A soma dos seu numeros superou 42")


# 01

nome = input("Qual o seu nome?")

for character in nome:
    print(character)



# 02

nums = input("Insira valores aqui, separados por espaço:")
numsArr = nums.split(" ")
sum = 0

for num in numsArr:
    if not num.isdigit():
      print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
      sum += int(num)


print(f"A soma dos valores válidos é: {sum}")
