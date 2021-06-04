function calculate(){
    var bill = document.getElementById('bill').value;
    var service = document.getElementById('service').value;
    var peopleCount = document.getElementById('peopleCount').value;

    if (bill === '' || service == 0) {
        alert('Please enter values');
        return;
    }

    if (peopleCount === '' || peopleCount <= 1) {
        peopleCount = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    var total = (bill * service) / peopleCount;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('calculate').onclick = function(){
    calculate();
} 