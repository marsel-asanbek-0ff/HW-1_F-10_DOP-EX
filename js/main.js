var stars = prompt("Выберите один из 5ти отелей!");
switch(stars) {
    case "1":
        alert("20$");
        break;
    case "2":
        alert("30$");
        break;
    case "3":
        alert("50$");
        break;
    case "4":
        alert("70$");
        break;
    case "5":
        alert("120$");
        break;
    default:
        alert("Такого количества звёзд нет!");
        break;
}