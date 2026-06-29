let form = document.querySelector('form');

// this usecase will give you empty value.
// const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid Height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `Your Body Mass Index is ${bmi}`;

        // Show the result on the basis of weight guid ===>

        if (bmi <= 18.6) {
            result.innerHTML = `<span>Your bmi is ${bmi}, your bmi is under weight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>Your bmi is ${bmi}, your bmi is normal<span>`
        } else {
            result.innerHTML = `<span>Your bmi is ${bmi}, your bmi is overweight</span>`
        }
    }

    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';

});