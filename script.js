const formDescarga = document.querySelector('.formDescarga')
const descargaBtn = document.getElementById('descargaBtn')
const formCarga = document.querySelector('.formCarga')
const cargaBtn = document.getElementById('cargaBtn')
const prepBtn = document.getElementById('prepBtn')
const formPrep = document.querySelector('.formPrep')
const calcBtn = document.querySelector('#calcBtn')
const calcDiv = document.querySelector('.calculation')
const calcDivTwo = document.querySelector('.calcDivTwo')
const preInsSec = document.querySelector('.pre-instalacao')


// COLOR BUTONS ON TOP OF THE PAGE
prepBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'grid'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'

})

descargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'grid'
    formCarga.style.display = 'none'
    formPrep.style.display = 'none'
    calcDiv.style.display = 'none'
    calcDivTwo.style.display = 'none'
    preInsSec.style.display = 'none'
})

cargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'none'
    formCarga.style.display = 'grid'
    formPrep.style.display = 'none'
    calcDiv.style.display = 'none'
    calcDivTwo.style.display = 'none'
    preInsSec.style.display = 'none'
})

calcBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'grid'
  calcDivTwo.style.display = 'grid'
  preInsSec.style.display = 'none'
})

// EMAIL SUBJECT AND TITLES TO CARGA
const subjectC = document.getElementById('subjectC')
const teamC = document.getElementById('teamC')
const submitC = document.getElementById('submitC')
const clientC = document.getElementById('clientC')

submitC.addEventListener('click', () => {
    if (teamC.value !== '') {
      subjectC.value = `CARGA do ${teamC.value} para ${clientC.value}`;
    }
})

// EMAIL SUBJECT AND TITLES TO DESCARGA
const subjectD = document.getElementById('subjectD')
const teamD = document.getElementById('teamD')
const submitD = document.getElementById('submitD')
const clientD = document.getElementById('clientD')

submitD.addEventListener('click', () => {
    if (teamD.value !== '') {
      subjectD.value = `DESCARGA do ${teamD.value} de ${clientD.value}`;
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
  // emptyValueToPrint()
})

dateC.addEventListener('input', () => {
  datePrint.textContent = dateC.value
})

// patC.addEventListener('input', () => {
//   patPrint.textContent = "PAT: " + patC.value
// })

// guia.addEventListener('input', () => {
//   guiaPrint.textContent = "Guia n: " + guia.value
// })

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

// ===================== Click the Whatsapp Button - CARGA =========================

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

// EMAIL SUBJECT AND TITLE TO PREPARAR for working on formsubmit - not valid on netlify forms
const submitP = document.querySelector('#submitP')
const subjectP = document.querySelector('#subjectP')

submitP.addEventListener('click', () => {
  if (clientP.value !== '') {
    subjectP.value = `PREPARAR MATERIAL PARA ${clientP.value}`;
  }
})

// ===================== Click the Whatsapp Button - PREPARAÇÃO =========================

const whatsappBtnPrep = document.querySelector('#whatsappBtnPrep');

whatsappBtnPrep.addEventListener('click', () => {
  sendValuesToWhatsappPrep()
})

function sendValuesToWhatsappPrep() {
  let wtMessage = (materialPrep.value).replace(/;/g, "%0a")
  let sendMaterialWt = "Preparar material para: " + "%0a" +
                       clientP.value + "%0a" +
                       "Data: " + dateP.value + "%0a" +
                       "Equipa: " + teamP.value + "%0a" + "%0a" +
                       "MATERIAL:" + "%0a" + wtMessage;

  let number = +351963120728;

  let url = "https://wa.me/" + number + "?text=" + sendMaterialWt;

  window.open(url, '_blank');

}

// METERS CALCULATOR OF EACH TYPE OF CABLE OR PIPE

async function callData () {
  return (await fetch('calculator.json')).json();
}

// fetch('calculator.json')
// .then(res => res.json())
// .then(data => console.log(data))

document.addEventListener('DOMContentLoaded', async () => {

  let objectKg = '';

  try {
  objectKg = await callData();
  } catch (error) {
  console.error('ERROR')
  console.log(error)
  }

  // let output = ''
  // LOOP FOR WEIGHT TO METERS
  for (let i = 0; i < objectKg.itemKg.length; i++) {

    let name = objectKg.itemKg[i].name;
    let weight = objectKg.itemKg[i].oneMeterweight;

    calcDiv.innerHTML += `
            <div class="calculation-box">
              <h2 class="productName">${name}</h2>
              <input type="number" class="weightValueMt" placeholder="KG">
              <button type="button" class="btn btn-dark">Calcular</button><br>
              <h3 class="meters"></h3>
              <h3 class="hiddenKg">${weight}</h3>
            </div>`
    convertionBtn()
  }
  

  for (let i = 0; i < objectKg.ferragens.length; i++) {

    let name = objectKg.ferragens[i].name;
    let weight = objectKg.ferragens[i].oneUnweight;

    calcDivTwo.innerHTML += `
            <div class="calculation-box">
              <h2 class="productName">${name}</h2>
              <input type="number" class="weightValueUn" placeholder="GR">
              <button type="button" class="btn btn-warning calcAmount">Calcular</button><br>
              <h3 class="un"></h3>
              <h3 class="hiddenMt">${weight}</h3>
            </div>`
    convertionBtnDivTwo()
  }

})

function convertionBtn () {

  let calcBtn = document.querySelectorAll('.btn-dark')

  calcBtn.forEach((btn, i) => {
    
    
    btn.addEventListener('click', () => {
      calcBtn[i].parentElement.style.backgroundColor = 'var(--yellow)'
      conversaoParaMetros(i)
    })
  })
}

function conversaoParaMetros(i) {

  let inp = document.querySelectorAll('.weightValueMt')
  let resultado = document.querySelectorAll('.meters')
  let weight = document.querySelectorAll('.hiddenKg')

  let input = inp[i].value;
  let peso = Number(weight[i].innerHTML);
  let test =  resultado[i].innerHTML = input / peso  
  resultado[i].innerHTML = test.toFixed(1) + " Metros"

}

  function convertionBtnDivTwo () {

    let calcBtnAmount = document.querySelectorAll('.calcAmount')

    calcBtnAmount.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        calcBtnAmount[i].parentElement.style.backgroundColor = 'var(--yellow)'
        conversaoParaUnidade(i)
      })
    })
  }

  function conversaoParaUnidade(i) {
    let inp = document.querySelectorAll('.weightValueUn')
    let resultado = document.querySelectorAll('.un')
    let weight = document.querySelectorAll('.hiddenMt')

    let input = inp[i].value;
    let peso = Number(weight[i].innerHTML);
    let test =  resultado[i].innerHTML = input / peso  
    resultado[i].innerHTML = test.toFixed(0) + " Un"

  }



// ========================= PRE-INSTALAÇÃO  =========================

const preInsBtn = document.querySelector('#preInsBtn')

preInsBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
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
const allInputsWithMeters = document.querySelectorAll('.valToPrint')


// AddEventListener's for Each input
function funcAddInputValue() {
  allInputsWithMeters.forEach((inp) => printListPreIns.innerHTML += (inp.value + ' metros de ' + inp.name + `<br>`)
)}

printBtnPreIns.addEventListener('click', () => {
  funcAddInputValue()
  window.print()
})

// ADD PRINT CONTENT TO PRINT BUTTON =================
  
    //  printListPreIns.innerHTML += `${inp.value} metros de ${inp.name} <br>`



// INPUT EVENTS

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


// ACTIVATE INPUTS THAT ARE SELECTED BY RADIO BUTTONS
const allRadioBtn = document.querySelectorAll('input[type="radio"]')
const mtValue = document.querySelectorAll('.mtValue')

mtValue.forEach(el => el.setAttribute("disabled", ""))


cobre14Name.addEventListener('click', () => {
  if (cobre14Name.checked) {
    mtCobre14.removeAttribute("disabled", '');
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


// const allInputsWithMeters = document.querySelectorAll('.valToPrint')

// function printValueOfMeters () {

//  allInputsWithMeters.forEach((inp) => 
//   inp.addEventListener('input', () => {
//     let newP = document.createElement('p')
//     newP.textContent = `${inp.value} metros de ${inp.name} <br>`
//     newP = newP.textContent
//     printListPreIns.innerHTML += newP
//     console.log(printListPreIns.textContent)
//   })

//  )
// }

// printValueOfMeters()
// `${inp.value} metros de ${inp.name} <br>`



//    allRadioBtn.forEach((btn, i) => {
//      btn.addEventListener('click', () => {

//        if (btn[i].checked == false) {
//          mtValue[i].removeAttribute("disabled", '')
//        }
//    })  
//  })
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


function newFunction() {
  cabo3g15.addEventListener('input', () => {
    printListPreIns.textContent = `${cabo3g15.value} metros de cabo 3G1.5`
  })
}




