var form = document.querySelector("form");


form.addEventListener('submit',function(e){
    e.preventDefault();
var height = parseInt(document.querySelector("#height").value);
var weight = parseInt(document.querySelector("#weight").value);
var result = document.querySelector("#result");

if (height=== ""|| height<0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
     result.style.color = "red";
            return;
}
if (weight=== ""|| weight<0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
     result.style.color = "red";
            return;
}
var heightInMeters = height / 100;
 const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
   let category = "";
        let color = "";

        if (bmi < 18.6) {
            category = "Underweight";
            color = "#3498db"; // blue
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Range";
            color = "#2ecc71"; // green
        } else {
            category = "Overweight";
            color = "#e67e22"; // orange
        }

        result.textContent = `Your BMI is ${bmi} (${category})`;
        result.style.color = "#fff";
        result.style.background = color;
        result.style.padding = "12px";
        result.style.borderRadius = "10px";
        result.style.marginTop = "12px";
        result.style.fontWeight = "600";
})