number_input1 = Element("number_input1")
number_input2 = Element("number_input2")
number_input3 = Element("number_input3")
number_input4 = Element("number_input4")
number_input5 = Element("number_input5")
number_input6 = Element("number_input6")
number_input7 = Element("number_input7")
number_input8 = Element("number_input8")
number_input9 = Element("number_input9")
number_input10 = Element("number_input10")
number_input11 = Element("number_input11")
number_input12 = Element("number_input12")
clear = Element("clear")


def play_game(*args):
    Point_Science = number_input1.value
    Point_English = number_input2.value
    Point_Chinese_Writing = number_input3.value
    Point_Korean = number_input4.value
    Point_History = number_input5.value
    Point_Math = number_input6.value
    Point_Descriptive_Science = number_input7.value
    Point_Descriptive_English = number_input8.value
    Point_Descriptive_Chinese_Writing = number_input9.value
    Point_Descriptive_History = number_input10.value
    Point_Descriptive_Physical_Education = number_input11.value
    Point_Descriptive_Math = number_input12.value

    
    arr = [
        Point_Science,
        Point_English,
        Point_Chinese_Writing,
        Point_Korean,
        Point_History,
        Point_Math,
        Point_Descriptive_Science,
        Point_Descriptive_English,
        Point_Descriptive_Chinese_Writing,
        Point_Descriptive_History,
        Point_Descriptive_Physical_Education,
        Point_Descriptive_Math
    ]
    
    if Point_Science == "":
        arr.remove(Point_Science)
        
    if Point_English == "":
        arr.remove(Point_English)
        
    if Point_Chinese_Writing == "":
        arr.remove(Point_Chinese_Writing)
        
    if Point_Korean == "":
        arr.remove(Point_Korean)
        
    if Point_History == "":
        arr.remove(Point_History)
        
    if Point_Math == "":
        arr.remove(Point_Math)
        
    if Point_Descriptive_Science == "":
        arr.remove(Point_Descriptive_Science)
        
    if Point_Descriptive_English == "":
        arr.remove(Point_Descriptive_English)
        
    if Point_Descriptive_Chinese_Writing == "":
        arr.remove(Point_Descriptive_Chinese_Writing)
        
    if Point_Descriptive_History == "":
        arr.remove(Point_Descriptive_History)
        
    if Point_Descriptive_Physical_Education == "":
        arr.remove(Point_Descriptive_Physical_Education)
        
    if Point_Descriptive_Math == "":
        arr.remove(Point_Descriptive_Math)
        
    arr = list(map(int, arr))
    result = sum(arr)
    output = result/len(arr)
    clear.element.innerText = f"당신의 평균 점수는 {output}점 입니다."
