function give_question(){
    number_1 = document.getElementById("no.1").value;
    number_2 = document.getElementById("no.2").value;
    answer = parseInt(number_1) * parseInt(number_2);

    question = "<span class='wrapper fadeInDown'> <span id='formContent'>" + "<h2 class='active'>"+ number_1 + " × " + number_2 + "</h2>";
    input_answer = "<br> Answer : <form><input type='text' id='answer_un' class='fadeIn second' placeholder='Enter Your Answer Here'><h3> </span> </span>";
    button_check = "<br> <input id='check' type='submit' class='fadeIn fourth' value='Check the Answer' onclick='check_answer()'>";
    display = question + input_answer + button_check;

    document.getElementById("question-answer").innerHTML = display;
    document.getElementById("no.1").value = "";
    document.getElementById("no.2").value = "";
};