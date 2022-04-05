from personagem import Personagem
from jedi_sith import Jedi, Sith

personagem1 = Personagem("Padmé", "Humana", 50, 165, 40)
personagem2 = Jedi("Luke Skywalker", "Humano", 70, 175, 150)
personagem3 = Sith("Vader", "Humano", 120, 200, 350)

print("----------ROUND 1----------")
print(f"O HP inicial do {personagem2.nome} é {personagem2.get_hp()}")
print(f"{personagem3.nome} atacou {personagem2.nome}")
personagem3.atacar(personagem2)
print(f"{personagem2.falar()}")
print(f"O HP final do {personagem2.nome} é {personagem2.get_hp()}")


# print(f"Olá, me chamo {personagem1.nome}")
# print(f"e tenho {personagem1.get_peso()}")
# personagem1.set_peso(77)
# print(f"mas quero chegar a {personagem1.get_peso()}")

# print(f"tenho {personagem1.get_hp()} de HP")
# print("Mas levei 20 de dano")
# personagem1.set_hp(20)
# print(f"Então fiquei com {personagem1.get_hp()} de HP")

# print(f"tenho {personagem2.get_hp()} de HP")
# print("Mas levei 20 de dano")
# personagem2.set_hp(20)
# print(f"Então fiquei com {personagem2.get_hp()} de HP")

# print(f"tenho {personagem3.get_hp()} de HP")
# print("Mas levei 20 de dano")
# personagem3.set_hp(20)
# print(f"Então fiquei com {personagem3.get_hp()} de HP")
