const HandleSubmit = (event) => {
    event.preventDefault()
    const x = document.getElementById("username").value
    const y = document.getElementById("mail").value
    const z = document.getElementById("city").value
    const a = document.getElementById("password1").value
    const b = document.getElementById("password2").value

    if (!x || !y || !z || !a || !b){
        CheckInput1()
    }
    else {
        CheckInput2()
    }
}

const CheckInput1 = () => alert("Нужно заполнить все поля")

const CheckInput2 = () => alert("Добро пожаловать в клуб!")

document.getElementById("form").addEventListener("submit", HandleSubmit)