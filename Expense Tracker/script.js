const form = {}
form.val = document.querySelector("#val");
form.desc = document.querySelector("#desc");
form.transdate = document.querySelector("#transdate");
form.addButton = document.querySelector('#formAddButton');

const tabs = {}
tabs.total = document.querySelector("#total-amt");
tabs.earn = document.querySelector("#earn-amt");
tabs.spend = document.querySelector("#spend-amt");

const transactions = document.querySelector("#transactions");

function addExpense() {
    let val = form.val.value;
    let description = form.desc.value;
    let transdate = form.transdate.value;

    var trans = document.createElement("tr");

    var td1 = document.createElement("td");
    var dustbin = document.createElement('i');
    dustbin.classList.add('fa');
    dustbin.classList.add('fa-trash-o');
    dustbin.classList.add('fa-lg');
    addListenerDustbin(dustbin);
    td1.append(dustbin);
    trans.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = description;
    trans.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = 'Rs. ' + val;
    trans.appendChild(td3);

    var td4 = document.createElement("td");
    td4.innerHTML =  transdate.slice(8, 10) + '/' + transdate.slice(5, 7) + '/' + transdate.slice(0, 4);
    trans.appendChild(td4);

    if (Number(val) < 0) {
        tabs.spend.innerHTML = Number(tabs.spend.innerHTML) - Number(val);
    } else {
        tabs.earn.innerHTML = Number(tabs.earn.innerHTML) + Number(val);
    }

    tabs.total.innerHTML = Number(tabs.total.innerHTML) + Number(val);

    transactions.appendChild(trans);

    form.val.value = '';
    form.desc.value = '';
    form.transdate.value = '';
}

form.addButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (form.desc.value == '') {
        alert('Provide a description!');
    } else {
        addExpense();
    }
})

function addListenerDustbin(dustbin) {
    dustbin.addEventListener('click', function(e) {
        e.stopPropagation();
        deleteExpense(e);
    });
}

function deleteExpense(e) {
    let currTrans = e.target.parentNode.parentNode;
    var val = currTrans.getElementsByTagName('td')[2].innerHTML;
    val = val.slice(4, val.length);
    if (Number(val) < 0) {
        tabs.spend.innerHTML = Number(tabs.spend.innerHTML) + Number(val);
    } else {
        tabs.earn.innerHTML = Number(tabs.earn.innerHTML) - Number(val);
    }
    tabs.total.innerHTML = Number(tabs.total.innerHTML) - Number(val);
    currTrans.parentNode.removeChild(currTrans);
}
