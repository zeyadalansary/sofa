var get = JSON.parse(localStorage.getItem("cart")) || [];

function getdata() {
    const container = document.getElementsByClassName("cards-container")[0];
    container.innerHTML = "";

    for (var i = 0; i < get.length; i++) {
        showCart(get[i], container);
    }

    total();
}

function showCart(pr, container) {
    var div2 = document.createElement('div');
    var img = document.createElement('img');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var qny = document.createElement('input');
    var but = document.createElement('button');

    img.src = pr.thumbnail; // الصورة من localStorage
    h2.textContent = pr.title;

    // Quantity input
    qny.setAttribute('type', 'number');
    qny.setAttribute('value', '1');

    h3.innerHTML = (pr.price * qny.value).toFixed(2);

    qny.onchange = function () {
        if (qny.value >= 0) {
            h3.innerHTML = (qny.value * pr.price).toFixed(2);
        } else {
            qny.value = 1;
            h3.innerHTML = pr.price.toFixed(2);
        }
        total();
    }

    // Remove button
    but.textContent = "🗑️";
    but.onclick = function () {
        container.removeChild(div2);
        // تحديث localStorage بعد الحذف
        get = get.filter(item => item.title !== pr.title);
        localStorage.setItem("cart", JSON.stringify(get));
        total();
    }

    // رسم الكارت
    div2.append(img, h2, h3, qny, but);
    div2.classList.add('caart');

    container.appendChild(div2);

    total();
}

function total() {
    var h3 = document.querySelectorAll('.caart h3');
    var totalUp = document.getElementsByClassName("totalPrice")[0];
    var total = 0;
    for (var i = 0; i < h3.length; i++) {
        total += parseFloat(h3[i].innerHTML);
    }
    totalUp.innerHTML = total.toFixed(2);
    return total;
}

// خصم 10%
var cp = document.getElementById("copon");
cp.onclick = function() {
    var totalD = total();
    var discount = totalD * 0.10;
    var finalTotal = totalD - discount;
    document.getElementsByClassName("totalPrice")[0].innerHTML = finalTotal.toFixed(2);
}


