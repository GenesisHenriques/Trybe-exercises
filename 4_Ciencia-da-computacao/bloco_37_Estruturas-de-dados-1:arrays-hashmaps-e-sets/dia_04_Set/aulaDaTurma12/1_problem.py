def to_buy(shelf):
    unique_at_shelf = set(shelf)
    all_itens = set(range(1, 21))

    return all_itens.difference(unique_at_shelf)


if __name__ == "__main__":
    shelf = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
    print(to_buy(shelf))

    shelf = [1, 2, 3]
    print(to_buy(shelf))

    shelf = []
    print(to_buy(shelf))

    shelf = [-1, -2, -3, -4]
    print(to_buy(shelf))
