function CheckInput () {
    let x = document.getElementsByID("username").value
    let y = document.getElementsByID("mail").value
    let z = document.getElementsByID("city").value
    let a = document.getElementsByID("password1").value
    let b = document.getElementsByID("password2").value

    if (x == "" || y == "" || z == "" || a == "" || b == ""){
        alert("Нужно заполнить все поля")
    }
    else {
        alert("Добро пожаловать в клуб!")
    }
}