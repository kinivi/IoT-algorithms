from math import sqrt


def get_length(w, l):
    return sqrt(w ** 2 + l ** 2)


if __name__ == '__main__':

    w = int(input())
    data = input()
    length_list = list(map(lambda x: int(x) - 1, data.split(" ")))

    solutions = [[{"l": 0, "prev_dist": 0}, {"l": length_list[0], "prev_dist": 0}]]

    for i in range(1, len(length_list)):
        temporary_solution_1 = list()
        temporary_solution_2 = list()

        temporary_solution_1.append(get_length(w, abs(0 - solutions[i - 1][0]["l"])) + solutions[i - 1][0]["prev_dist"])
        temporary_solution_1.append(get_length(w, abs(0 - solutions[i - 1][1]["l"])) + solutions[i - 1][1]["prev_dist"])

        if temporary_solution_1[0] > temporary_solution_1[1]:
            final_solution_1 = {"l": 0,
                                "prev_dist": temporary_solution_1[0]}
        else:
            final_solution_1 = {"l": 0,
                                "prev_dist": temporary_solution_1[1]}

        temporary_solution_2.append(get_length(w, abs(length_list[i] - solutions[i - 1][0]["l"]))
                                    + solutions[i - 1][0]["prev_dist"])
        temporary_solution_2.append(get_length(w, abs(length_list[i] - solutions[i - 1][1]["l"]))
                                    + solutions[i - 1][1]["prev_dist"])

        if temporary_solution_2[0] > temporary_solution_2[1]:
            final_solution_2 = {"l": length_list[i],
                                "prev_dist": temporary_solution_2[0]}
        else:
            final_solution_2 = {"l": length_list[i],
                                "prev_dist": temporary_solution_2[1]}

        solutions.append([final_solution_1, final_solution_2])

    print(max(solutions[len(length_list) - 1][0]["prev_dist"], solutions[len(length_list) - 1][1]["prev_dist"]))
