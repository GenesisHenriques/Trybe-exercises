from stack import Stack


def is_valid(string):
    if len(string) % 2 != 0:
        print('Primeiroooo')
        return False

    stack = Stack()

    for char in string:
        if char not in ["(", "[", "{", "}", "]", ")"]:
            print('Primeiro')
            return False

        if char in ["(", "[", "{"]:
            print('segundo')
            Stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            Stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            Stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            Stack.pop()
        else:
            return False

    return stack.is_empty()


print('Entrada: "()"', is_valid("()"))  # True
