def contains_duplicate(nums):
    nums.sort()
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


if __name__ == "__main__":
    test1 = [1, 2, 3, 1]                     # True

    test2 = []                              # Falso

    test3 = [1, 2, 3, 4]                    # False

    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # True

    print(contains_duplicate(test1))
    print(contains_duplicate(test2))
    print(contains_duplicate(test3))
    print(contains_duplicate(test4))
