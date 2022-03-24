reprovados = []

with open("data_03.txt") as file:
    for line in file:
        aluno = line.split(' ')
        if (int(aluno[1]) < 6):
            reprovados.append(aluno[0] + "\n")


with open("reprovados.txt", mode="w") as repro:
    print(reprovados)
    repro.writelines(reprovados)
