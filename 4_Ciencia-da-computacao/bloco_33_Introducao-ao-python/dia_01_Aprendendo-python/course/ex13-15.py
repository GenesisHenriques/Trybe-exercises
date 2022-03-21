# 13

fatorial = 5
total = 1

for num in range(1, fatorial + 1):
    total *= num
    # print(total)


fat = 5
count = 1
result = 1

while count <= fat:
    result *= count
    count += 1
    # print(result)


# 14

ratings = [6, 8, 5, 9, 10]

new_ratings1 = [10 * rating for rating in ratings]

new_ratings2 = []

for rating in ratings:
  new_ratings2.append(10 * rating)

print(new_ratings1)
print(new_ratings2)


# 15

for rating in new_ratings2:
    if (rating % 3) == 0:
      print(f"{rating} é múltiplo de 3")
