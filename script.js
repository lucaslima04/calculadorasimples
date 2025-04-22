function appendvalue(value) {
    document.getElementById("visor").value += value;
}

function clearDisplay() {
    document.getElementById("visor").value = "";
}

function calculate() {
    try {
        document.getElementById("visor").value = eval(document.getElementById("visor").value);
    } 
    catch (error) {
        document.getElementById("visor").value = "Error";
    }
}