function processForm() {
    let userName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    alert("Hello, " + userName + " " + lastName + "!");
    return false;
}