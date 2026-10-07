alert("welcome to my calculator");

while (true) {
var n1 = Number(prompt("enter your first value :"));
var n2 = Number(prompt("enter your second value :"));
var choice = prompt(" 1.for addition \n 2.for substraction \n 3.for multiplication \n 4.for division \n\nenter your choice:");

    switch (choice) {
        case "1" :
            alert(`addition ${n1} + ${n2} = ${n1+n2}`);
            break;
        case "2" :
            alert(`substraction ${n1} - ${n2} = ${n1-n2}`);
            break;
        case "3" :
            alert(`multiplication ${n1} * ${n2} = ${n1*n2}`);
            break;
        case "4" :
            alert(`division ${n1} / ${n2} = ${n1/n2}`);
            break;
    
        case "5" :c("bye!!");
            break;
    }
   if (choice == "5")
    {
        break;
    }

}