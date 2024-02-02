const formDescarga = document.querySelector('.formDescarga')
const descargaBtn = document.getElementById('descargaBtn')
const formCarga = document.querySelector('.formCarga')
const cargaBtn = document.getElementById('cargaBtn')
const prepBtn = document.getElementById('prepBtn')
const formPrep = document.querySelector('.formPrep')
const calcBtn = document.querySelector('#calcBtn')
const calcDiv = document.querySelector('.calculation')


prepBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'grid'
  calcDiv.style.display = 'none'
  preInsSec.style.display = 'none'

})

descargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'grid'
    formCarga.style.display = 'none'
    formPrep.style.display = 'none'
    calcDiv.style.display = 'none'
    preInsSec.style.display = 'none'
})

cargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'none'
    formCarga.style.display = 'grid'
    formPrep.style.display = 'none'
    calcDiv.style.display = 'none'
    preInsSec.style.display = 'none'
})

calcBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'grid'
  preInsSec.style.display = 'none'
})

const subjectC = document.getElementById('subjectC')
const teamC = document.getElementById('teamC')
const submitC = document.getElementById('submitC')
const clientC = document.getElementById('clientC')



submitC.addEventListener('click', () => {
    if (teamC.value !== '') {
      subjectC.value = 'CARGA do ' + teamC.value + ' para ' + clientC.value;
    }
})

const subjectD = document.getElementById('subjectD')
const teamD = document.getElementById('teamD')
const submitD = document.getElementById('submitD')
const clientD = document.getElementById('clientD')

submitD.addEventListener('click', () => {
    if (teamD.value !== '') {
      subjectD.value = 'DESCARGA do ' + teamD.value + ' de ' + clientD.value;
    }
})
// PRINT
const printBtn = document.querySelector('#printBtn')
const toPrint = document.querySelector('#toPrint')
const list = document.querySelector('#list')
const material = document.querySelector('#material')
const clientName = document.querySelector('#clientName')
const datePrint = document.querySelector('#datePrint')
const dateC = document.querySelector('#dateC')
const patPrint = document.querySelector('#patPrint')
const patC = document.querySelector('#patC')
const returnDiv = document.querySelector('#returnDiv')
const newLine = document.querySelector('#newLine')
const guia = document.querySelector('#guia')
const guiaPrint = document.querySelector('#guiaPrint')
const obsC = document.querySelector('#obsC')
const printObsDiv = document.querySelector('.print-obs-div')
const printObsCarga = document.querySelector('#printObs')

printBtn.addEventListener('click', () => {
  window.print()
})

clientC.addEventListener('input', () => {
  clientName.textContent = clientC.value
})

material.addEventListener('input', () => {
  list.innerText = material.value
  returnDiv.innerText = material.value
  deleteNumbToReturn()
  emptyValueToPrint()
})

dateC.addEventListener('input', () => {
  datePrint.textContent = dateC.value
})

patC.addEventListener('input', () => {
  patPrint.textContent = "PAT: " + patC.value
})

guia.addEventListener('input', () => {
  guiaPrint.textContent = "Guia n: " + guia.value
})

function deleteNumbToReturn () {
  let numbersToDelete = new RegExp(/(\d+)[.,]*(\d*)(\s+)/g)
  let myreturnText = list.innerText.replace(numbersToDelete, "")

  list.innerText = list.innerText.replace(/;/g, "\n")
  // returnDiv.innerText = myreturnText
  returnDiv.innerText = myreturnText.replace(/;/g, "\n")
  console.log(myreturnText)
}

// ============================ OBSERVAÇÕES PRINT CARGA==============================

obsC.addEventListener('input', () => {

  printObsCarga.textContent = obsC.value;

  function showsObs () {

    if (obsC.value !== "") {
      printObsDiv.style.display = 'grid'
    }
    else return

  }

  showsObs()

})


//  PRINT PREPARAÇÃO

const printBtnPrep = document.querySelector('#printBtnPrep')
const clientNamePrep = document.querySelector('#clientNamePrep')
const clientP = document.querySelector('#clientP')
const localPrint = document.querySelector('#localPrint')
const localP = document.querySelector('#localP')
const teamPrint = document.querySelector('#teamPrint')
const teamP = document.querySelector('#teamP')
const datePrintPrep = document.querySelector('#datePrintPrep')
const dateP = document.querySelector('#dateP')
const listPrep = document.querySelector('#listPrep')
const cargaPrep = document.querySelector('#cargaPrep')
const materialPrep = document.querySelector('#materialPrep')
const faturaP = document.querySelector('#faturaP')
const faturaPrintPrep = document.querySelector('#faturaPrintPrep')
const obsPrintPrep = document.querySelector('#printObsPrep')
const obsP = document.querySelector('#obsP')
const obsPrepDiv = document.querySelector('.obs-div-prep')

obsP.addEventListener('input', () => {

  obsPrintPrep.textContent = obsP.value;

  function showsObsP() {

    if (obsP.value !== "") {
      obsPrepDiv.style.display = 'grid'
    }
    else return

  }
    showsObsP()

})

printBtnPrep.addEventListener('click', () => {
  window.print();
})

faturaP.addEventListener('input', () => {
  faturaPrintPrep.textContent = faturaP.value;
})

clientP.addEventListener('input', () => {
  clientNamePrep.textContent = "Cliente: " + clientP.value;
})

dateP.addEventListener('input', () => {
  datePrintPrep.textContent = dateP.value;
})

localP.addEventListener('input', () => {
  localPrint.textContent = "Local: " + localP.value;
})

obsP.addEventListener('input', () => {
  obsPrintPrep.textContent = obsP.value
})

teamP.addEventListener('input', () => {
  teamPrint.textContent = teamP.value
})

materialPrep.addEventListener('input', () => {
  listPrep.innerText = materialPrep.value
  cargaPrep.innerText = materialPrep.value
  deleteNumbToReturnOnPrep()
})

function deleteNumbToReturnOnPrep() {
  let numbersToDelete = new RegExp(/(\d+)[.,]*(\d*)(\s+)/g)
  let myreturnText = listPrep.innerText.replace(numbersToDelete, "")

  listPrep.innerText = listPrep.innerText.replace(/;/g, "\n")
  // returnDiv.innerText = myreturnText
  cargaPrep.innerText = myreturnText.replace(/;/g, "\n")
  console.log(myreturnText)
}

const submitP = document.querySelector('#submitP')
const subjectP = document.querySelector('#subjectP')

submitP.addEventListener('click', () => {
  if (clientP.value !== '') {
    subjectP.value = 'PREPARAR MATERIAL PARA ' + clientP.value;
  }
})

// =======================================================================


// ===================== Click the Whatsapp Button =========================

const whatsappBtn = document.querySelector('#whatsappBtn');

whatsappBtn.addEventListener('click', () => {
  sendValuesToWhatsapp()
  chooseNumberToSend()
})

function sendValuesToWhatsapp() {
  let wtMessage = material.value.replace(/;/g, "%0a")
  let sendMaterialWt = "Carga para: " + "%0a" +
                       clientC.value + "%0a" +
                       "PAT: " + patC.value + "%0a" +
                       "Guia nº: " + guia.value + "%0a" + "%0a" +
                       "MATERIAL:" + "%0a" + wtMessage;

  let number = +351963120728;

  let url = "https://wa.me/" + number + "?text=" + sendMaterialWt;

  window.open(url, '_blank');
}

// =============== WHATSAPP ASSOCIATION ============
// IF IT IS FOR THIS TEAM,WHEN THE USER CLICKS ON WHATSAPP BUTTON
// THE WHATSAPP MESSAGE GOES TO THIS TEAM MOBILE PHONE

// function chooseNumberToSend() {

//   numbsArray = [+351915401856, +351932172345, +351915252942, +351963120728, +351916060662]


// }

        // METERS CALCULATOR OF EACH TYPE OF CABLE OR PIPE

async function callData () {
  return (await fetch('calculator.json')).json();
}

// fetch('calculator.json')
// .then(res => res.json())
// .then(data => console.log(data))

document.addEventListener('DOMContentLoaded', async () => {

  let  object = '';

  try {
  object = await callData();
  } catch (error) {
  console.error('ERROR')
  console.log(error)
  }

  // let output = ''

  for (let i = 0; i < object.cabo.length; i++) {

    let name = object.cabo[i].name;
    let weight = object.cabo[i].oneMeterweight;
    let un = object.cabo[i].un;


    const calculationDiv = document.querySelector('.calculation')

    calculationDiv.innerHTML += `
            <div class="calculation-box">
            <h2 class="productName">${name}</h2>
            <input type="number" class="weightValue" placeholder="KG">
            <button type="button" class="btn btn-dark">Calcular</button>
            <h3 class="meters"></h3>
            <h3 class="hidden">${weight}</h3><br>
            </div>`
  }
  convertionBtn()
})

function convertionBtn () {

  let calcBtn = document.querySelectorAll('.btn-dark')

  calcBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
       conversaoParaMetros(i)
    })
  })
}
// let weight = document.querySelectorAll('.hidden')


function conversaoParaMetros(i) {

  let inp = document.querySelectorAll('input')
  let resultado = document.querySelectorAll('.meters')
  let weight = document.querySelectorAll('.hidden')
  // let productName = document.querySelectorAll('.productName')

  let input = inp[i].value;
  let peso = Number(weight[i].innerHTML);
  let test =  resultado[i].innerHTML = input / peso  
  resultado[i].innerHTML = test.toFixed(1) + " Metros"

  // if (productName[i].innerHTML = "Isolamento lã Rocha") {
  // resultado[i].innerHTML = test.toFixed(1) + " Metros Quadrados"
  // } 
  // if (productName[i].innerHTML = "Vareta Cobre") {
  //   resultado[i].innerHTML = test.toFixed(1) + " Varetas"
  // }
  // else {
  //   return
  // }
  // if (input = ' ') {
  //   resultado[i].textContent = "Insere um valor"
  //   setTimeout(() => {location.reload()}, 1000)
  //   } 
  //  else {return}

//   resultado[i].innerHTML = resultado[i]
}


//  PRE-INSTALAÇÃO  =================================================================

const preInsBtn = document.querySelector('#preInsBtn')
const preInsSec = document.querySelector('.pre-instalacao')

preInsBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  preInsSec.style.display = 'grid'
})
