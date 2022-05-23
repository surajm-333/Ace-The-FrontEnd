
  
 const apiBase = 'https://free.currencyconverterapi.com/api/v6/';
  const api = (currency,currency2) => `
    ${apiBase}convert?q=${currency}_${currency2}&compact=ultra&apiKey=bc3c1ae7e4fe84c4cce0`;

    const toast = (msg) => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;
        
        toastr .textContent = msg;
        if(!toastr.classList.contains('on')) {
          toastr.classList.add('on');
        }
      };

      const doneToasting = () => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;
        
        toastr.textContent = '';
        toastr.classList.remove('on');
      };
      

      const conversionSucceeded = (apiResponse) => {
        if(!apiResponse) {
          toast(`nothing to display ...`);
          return;
        }
        const [value] = Object.values(apiResponse) 

        const btn = document.querySelector('button');
        btn.removeAttribute('disabled');

    const display = document.querySelector('.conversion');
    const formatter = new Intl.NumberFormat(
        'en-NG', { style: 'currency', currency: `${getSelectedCurrency2()}`}

    );

    let amount=document.getElementById("Amount").value;
    amount=amount==0?1:amount;
    display.textContent = formatter.format(value*amount); 
    doneToasting(); 
  };

  const createNode=(element) =>{
      return document.createElement(element);
  }

  const append=(parent, el)=> {
      return parent.appendChild(el);
  }
  const populateCurrencies=()=>{
      currencies.map(c => {
        let opt= createNode("option");
        opt.setAttribute("value",c.id);
        let text=document.createTextNode(`${c.name}`)
        append(opt,text);
        let sel=document.getElementsByClassName("select-text")[0];
        append(sel,opt);
      } );
  }
  const populateCurrencies2=()=>{
    currencies.map(c => {
      let opt= createNode("option");
      opt.setAttribute("value",c.id);
      let text=document.createTextNode(`${c.name}`)
      append(opt,text);
      let sel=document.getElementsByClassName("select-text")[1];
      append(sel,opt);
    } );
  }

  const getSelectedCurrency = () =>{
      
      return document.getElementsByClassName("select-text")[0].value;
  };
  
  const getSelectedCurrency2 = () =>{
  
    return document.getElementsByClassName("select-text")[1].value;
  };

  
  const convert = (event) => {
    toast(`preparing to convert ....`);

    const btn = event ?
        event.target : document.querySelector('button');

    const selected = getSelectedCurrency();

    if(!selected|| selected.trim() === ''
    || !currencies.map(c => c.id).includes(selected)) return;

    const selected2 = getSelectedCurrency2();

    if(!selected2|| selected2.trim() === ''
    || !currencies.map(c => c.id).includes(selected2)) return;

    btn.setAttribute('disabled', 'disabled');
    toast(`converting ...`);

    const endpoint = api(selected,selected2);


    fetch(endpoint) 
    .then((resp) => resp.json())
    .then((data) =>{
        conversionSucceeded(data);
    })
    .catch((error)=>{
        console.log(error);
    });
  };

  const startApp = () =>{
      
      populateCurrencies();
      populateCurrencies2();
      
      let draw = document.getElementsByClassName("btn")[0];
      draw.addEventListener("click", ()=>{
        document.getElementsByClassName("conversion")[0].style.display="block";
        convert(event);
      });
  }
  startApp(); 
