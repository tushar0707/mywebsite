function send()
{
    var number_1_get = document.getElementById("number_1").value;
    var number_2_get = document.getElementById("number_2").value;
    var actual_answer = parseInt(number_1_get) * parseInt(number_2_get);
    question_number = "<h4>" + number_1_get + "X" + number_2_get + "</h4>";
	input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}//check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";