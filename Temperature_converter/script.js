function KelvinEmCelsius() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaC = temperaturaDigitada - 273;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaC + "° Kelvin equivale a " + temperaturaDigitada + "° Celsius.</p>";
    }
}

function KelvinEmFahrenheit() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaF = (temperaturaDigitada - 273) * 1.8 + 32;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaDigitada + "° Kelvin equivale a " + temperaturaF.toFixed(1) + "° Fahrenheit.</p>";
    }
}


function CelsiusEmKelvin() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaK = Number(temperaturaDigitada) + 273;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaK.toFixed(1) + "° Kelvin equivale a " + temperaturaDigitada + "° Celsius.</p>";
    }
}


function CelsiusEmFahrenheit() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaF = Number(temperaturaDigitada) * 1.8 + 32;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaF.toFixed(1) + "° Fahrenheit equivale a " + temperaturaDigitada + "° Celsius.</p>";
    }
}

function FahrenheitEmCelsius() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaC = (temperaturaDigitada - 32) / 1.8;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaC.toFixed(1) + "° Celsius equivale a " + temperaturaDigitada + "° Fahrenheit.</p>";
    }
}

function FahrenheitEmKelvin() {
    var temperaturaDigitada = document.getElementById('temperatura');
    var temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('result');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">"Enter a number to make the conversion"</p>';
    } else {
        temperaturaK = (temperaturaDigitada - 32) * 5 / 9 + 273;
        res.innerHTML = "<p><b>Result:</b><br>" + temperaturaK.toFixed(1) + "° Kelvin equivale a " + temperaturaDigitada + "° Fahrenheit.</p>";
    }
}
