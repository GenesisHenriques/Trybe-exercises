# interator

frutas = ["pitaya", "limao", "uva", "jaca", "tomate"]

itFrutas = iter(frutas)

while itFrutas:
    try:
        print(next(itFrutas))
    except StopIteration:
        print("Cabô a fofoca, depois te falo")
        break
