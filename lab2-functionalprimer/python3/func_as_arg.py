def listFunc(a, b):
    return [i for i in range(a, b+1)]  # Create list of ints from a to b

def applicatorFunc(inpFunc, s, a, b):
    lst = inpFunc(a, b)
    if s == 's':
        return sum(lst)
    elif s == 'a':
        return sum(lst) / len(lst)
    else:
        raise ValueError("Invalid operation")

a = 1
b = 10
print(applicatorFunc(listFunc, 'a', a, b))  # Call applicatorFunc with listFunc, 'a', a, and b as args