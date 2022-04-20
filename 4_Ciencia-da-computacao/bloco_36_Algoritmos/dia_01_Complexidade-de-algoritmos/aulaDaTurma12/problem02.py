def next_greatest_letter(letters, target):
    low_index = 0
    higth_index = len(letters)

    while low_index < higth_index:
        middle_index = (higth_index + low_index) // 2

        if letters[middle_index] <= target:
            low_index = middle_index + 1
        else: 
            higth_index = middle_index

    return letters[low_index % len(letters)]






if __name__ == "__main__":
    letras1 = ["c", "f", "j"]
    alvo1 = "a"

    letras2 = ["c", "f", "j"]
    alvo2 = "f"


print(next_greatest_letter(letras1, alvo1))
print(next_greatest_letter(letras2, alvo2))
