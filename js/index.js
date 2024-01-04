// luas segitiga
const inputAlas = document.getElementById("input-alas");
const inputTinggi = document.getElementById("input-tinggi");
const submitBtn1 = document.getElementById("submit-button1");
const result1 = document.getElementById("result1");
const submit1 = document.getElementById("submit1");

// menampilkan input
const calculatorArea1 = () => {
    result1.textContent = "L = 1/2" + " x " + inputAlas.value + " x " + inputTinggi.value;
};

// menghitung luas segitiga
inputAlas.addEventListener("input", calculatorArea1);
inputTinggi.addEventListener("input", calculatorArea1);

submitBtn1.addEventListener("click", (event) => {
    event.preventDefault();
    const area1 = 0.5 * parseFloat(inputAlas.value) * parseFloat(inputTinggi.value);
    submit1.textContent = "L = " + area1;
});

///---

// keliling segitiga
const sisiS = document.getElementById("input-sisi1");
const sisiD = document.getElementById("input-sisi2");
const sisiT = document.getElementById("input-sisi3");
const submitBtn2 = document.getElementById("submit-button2");
// const reset2 = document.getElementById("reset2");
const result2 = document.getElementById("result2");
const submit2 = document.getElementById("submit2");

// menampilkan input
const calculateArea2 = () => {
    result2.textContent = "K = " + sisiS.value + " + " + sisiD.value + 
    " + " + sisiT.value;
};

// menghitung keliling segitiga
sisiS.addEventListener("input", calculateArea2);
sisiD.addEventListener("input", calculateArea2);
sisiT.addEventListener("input", calculateArea2);
submitBtn2.addEventListener("click", (event) => {
    event.preventDefault();
    const sum2 = parseFloat(sisiS.value) + parseFloat(sisiD.value) + 
    parseFloat(sisiT.value);
    submit2.textContent = "K = " + sum2;
});