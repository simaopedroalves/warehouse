const formDescarga = document.querySelector('.formDescarga')
const descargaBtn = document.getElementById('descargaBtn')
const formCarga = document.querySelector('.formCarga')
const cargaBtn = document.getElementById('cargaBtn')
const prepBtn = document.getElementById('prepBtn')
const formPrep = document.querySelector('.formPrep')
const calcBtn = document.querySelector('#calcBtn')
const calcDiv = document.querySelector('.calculation')

// COLOR BUTONS ON TOP OF THE PAGE
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

// EMAIL SUBJECT AND TITLES TO CARGA
const subjectC = document.getElementById('subjectC')
const teamC = document.getElementById('teamC')
const submitC = document.getElementById('submitC')
const clientC = document.getElementById('clientC')



submitC.addEventListener('click', () => {
    if (teamC.value !== '') {
      subjectC.value = 'CARGA do ' + teamC.value + ' para ' + clientC.value;
    }
})

// EMAIL SUBJECT AND TITLES TO DESCARGA
const subjectD = document.getElementById('subjectD')
const teamD = document.getElementById('teamD')
const submitD = document.getElementById('submitD')
const clientD = document.getElementById('clientD')

submitD.addEventListener('click', () => {
    if (teamD.value !== '') {
      subjectD.value = 'DESCARGA do ' + teamD.value + ' de ' + clientD.value;
    }
})
// PRINT CARGA
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
  // printPrepDiv.style.display = 'none'
  // toPrint.style.display = 'grid'
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
const printPrepDiv = document.querySelector('.printModePrep')
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
  // toPrint.style.display = 'none'
  // printPrepDiv.style.display = 'grid'
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

// EMAIL SUBJECT AND TITLE TO PREPARAR
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
  // chooseNumberToSend()
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


// ========================= PRE-INSTALAÇÃO  =========================

const preInsBtn = document.querySelector('#preInsBtn')
const preInsSec = document.querySelector('.pre-instalacao')

preInsBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  preInsSec.style.display = 'grid'
})

// Radio Buttons and Inputs type Number
const printPreInsDiv = document.querySelector('.printModePreIns')
const printBtnPreIns = document.querySelector('#printBtnPreIns')
const clientNamePreIns = document.querySelector('#clientPreIns')
const printClientPreIns = document.querySelector('#clientNamePreIns')
const printLocalPreIns = document.querySelector('#localPreInsPrint')
const localPreIns = document.querySelector('#localPreIns')
const teamPreIns = document.querySelector('#teamPreIns')
const printTeamPreIns = document.querySelector('#teamPreInsPrint')
const datePreIns = document.querySelector('#datePreIns')
const printDatePreIns = document.querySelector('#datePreInsPrint')
const printListPreIns = document.querySelector('#listPreIns')
const selectZone = document.querySelector('.selection-zone-pre-instalacao')

// Cobre Names and input Values
const cobre14Name = document.querySelector('#cobre14')
const mtCobre14 = document.querySelector('#mtcobre14')
const cobre38Name = document.querySelector('#cobre38')
const mtCobre38 = document.querySelector('#mtcobre38')
const cobre12Name = document.querySelector('#cobre12')
const mtCobre12 = document.querySelector('#mtcobre12')
const cobre58Name = document.querySelector('#cobre58')
const mtCobre58 = document.querySelector('#mtcobre58')

// Cabo Names
const cabo3g15 = document.querySelector('#cabo3g15')
const mtCabo3g15 = document.querySelector('#mtcabo3g15')
const cabo3g25 = document.querySelector('#cabo3g25')
const mtCabo3g25 = document.querySelector('#mtcabo3g25')
const cabo5g15 = document.querySelector('#cabo5g15')
const mtCabo5g15 = document.querySelector('#mtcabo5g15')
const cabo5g25 = document.querySelector('#cabo5g25')
const mtCabo5g25 = document.querySelector('#mtcabo5g25')

// Tubo p/cabo Eletrico
const tAnelAzul = document.querySelector('#tAnelAzul')
const mtAnelAzul = document.querySelector('#mtAnelAzul')
const tGris = document.querySelector('#gris')
const mtGris = document.querySelector('#mtGris')

// Caixa Pre-Instalação
const cxName = document.querySelector('#cxPreInsName')
const numbCxPreIns = document.querySelector('#cxPreIns')

// AddEventListener's for Each input
printBtnPreIns.addEventListener('click', () => {
  window.print()
})

clientNamePreIns.addEventListener('input', () => {
  printClientPreIns.textContent = "Cliente: " + clientNamePreIns.value;
})

localPreIns.addEventListener('input', () => {
  printLocalPreIns.textContent = "Local: " + localPreIns.value;
})

teamPreIns.addEventListener('input', () => {
  printTeamPreIns.textContent = "Equipa: " + teamPreIns.value;
})

datePreIns.addEventListener('input', () => {
  printDatePreIns.textContent = "Data: " + datePreIns.value;
})



const allRadioBtn = document.querySelectorAll('input[type="radio"]')
const mtValue = document.querySelectorAll('.mtValue')

mtValue.forEach(el => el.setAttribute("disabled", ""))

allRadioBtn.forEach((btn, i) => {

  btn.addEventListener('click' , () => {
   printed(i)
  })
})

function printed(i) {
  printListPreIns.innerHTML += btn[i].value
}
// function printPreIns() {

//   // printListPreIns.innerHTML += ``

//   allRadioBtn.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//       // enableInput(i)
//     })
//   })
// }


// function enableInput(i) {
//   mtValue.forEach((el, i) => {
//     el[i].removeAttribute("disabled", '')
//   })
// }
cobre14Name.addEventListener('click', () => {
  if (cobre14Name.checked) {
    mtCobre14.removeAttribute("disabled", '')
}
})

cobre12Name.addEventListener('click', () => {
  if (cobre12Name.checked) {
    mtCobre12.removeAttribute("disabled", '')
}
})

cobre38Name.addEventListener('click', () => {
  if (cobre38Name.checked) {
    mtCobre38.removeAttribute("disabled", '')
}
})

cobre58Name.addEventListener('click', () => {
  if (cobre58Name.checked) {
    mtCobre58.removeAttribute("disabled", '')
}
})

cabo3g15.addEventListener('click', () => {
  if (cabo3g15.checked) {
    mtCabo3g15.removeAttribute("disabled", '')
    mtCabo3g15.setAttribute("name",`${mtCabo3g15.value}`)
}
})

cabo3g25.addEventListener('click', () => {
  if (cabo3g25.checked) {
    mtCabo3g25.removeAttribute("disabled", '')
}
})

cabo5g15.addEventListener('click', () => {
  if (cabo5g15.checked) {
    mtCabo5g15.removeAttribute("disabled", '')
}
})

cabo5g25.addEventListener('click', () => {
  if (cabo5g25.checked) {
    mtCabo5g25.removeAttribute("disabled", '')
}
})

cabo5g25.addEventListener('click', () => {
  if (cabo5g25.checked) {
    mtCabo5g25.removeAttribute("disabled", '')
}
})

tAnelAzul.addEventListener('click', () => {
  if (tAnelAzul.checked) {
    mtAnelAzul.removeAttribute("disabled", '')
}
})

tGris.addEventListener('click', () => {
  if (tGris.checked) {
    mtGris.removeAttribute("disabled", '')
} else {
  return
}
})

mtCabo3g15.addEventListener('input' , () => {
  mtCabo3g15.value = mtCabo3g15.value
})


//   allRadioBtn.forEach((btn, i) => {
//     btn.addEventListener('click', () => {

//       if (btn[i].checked) {
//         mtValue[i].removeAttribute("disabled", '')
//       }
//   })  
// })
// printPreIns()


// EMAIL SUBJECT AND TITLE TO PRE-INS

const submitPreIns = document.querySelector('#submitPreIns')
const subjectPreIns = document.querySelector('#subjectPreIns')
const clientPreIns = document.querySelector('#clientPreIns')

submitPreIns.addEventListener('click', () => {
  if (clientPreIns.value !== '') {
    subjectPreIns.value = `PREPARA PRÉ-INSTALAÇÃO PARA ${clientPreIns.value}`;
  }
})