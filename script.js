const formDescarga = document.querySelector('.formDescarga')
const descargaBtn = document.getElementById('descargaBtn')
const formCarga = document.querySelector('.formCarga')
const cargaBtn = document.getElementById('cargaBtn')
const faltasBtn = document.querySelector('#faltasBtn')
const faltasDiv = document.querySelector('.formFaltas')
const prepBtn = document.getElementById('prepBtn')
const formPrep = document.querySelector('.formPrep')
const calcBtn = document.querySelector('#calcBtn')
const calcDiv = document.querySelector('.calculation')
const calcDivTwo = document.querySelector('.calcDivTwo')
const preInsSec = document.querySelector('.pre-instalacao')
const caisBtn = document.querySelector('.caisBtn')
const menu = document.querySelector('.fa-warehouse')
const titleForm = document.querySelectorAll('.form-title')
const printFaltasDiv = document.querySelector('#toPrintFaltas');
const searchBar = document.querySelector('.search-bar-section');
const intervencaoBtn = document.querySelector('#intervencaoBtn');
const intervencaoDiv = document.querySelector('.formIntervencao');

// test scanner
// const scannerMenuBtn = document.querySelector('#scannerMenuBtn');
// const scannerSection = document.querySelector('.scanner-container');

// const video = document.getElementById('video');
// const result = document.getElementById('result');
// const error = document.getElementById('error');
// const startButton = document.getElementById('startButton');
// const stopButton = document.getElementById('stopButton');

// let codeReader;
// let scanning = false;

// // Initialize the barcode scanner
// function initScanner() {
//     codeReader = new ZXing.BrowserMultiFormatReader();
//     error.textContent = '';
// }

// // Start scanning
// async function startScanning() {
//     try {
//         initScanner();
        
//         const devices = await codeReader.listVideoInputDevices();
//         const deviceId = devices.length > 0 ? devices[0].deviceId : undefined;
        
//         await codeReader.decodeFromVideoDevice(deviceId, video, (result, err) => {
//             if (result) {
//                 handleScanResult(result.text);
//             }
//             if (err && !(err instanceof ZXing.NotFoundException)) {
//                 error.textContent = err.message;
//                 console.error(err);
//             }
//         });
        
//         scanning = true;
//         startButton.disabled = true;
//         stopButton.disabled = false;
//     } catch (e) {
//         error.textContent = e.message;
//         console.error(e);
//     }
// }

// // Stop scanning
// function stopScanning() {
//     if (codeReader && scanning) {
//         codeReader.reset();
//         scanning = false;
//         startButton.disabled = false;
//         stopButton.disabled = true;
//         result.textContent = 'Scanner stopped';
//     }
// }

// // Handle scan results
// function handleScanResult(scanResult) {
//     result.textContent = scanResult;
//     console.log('Barcode detected:', scanResult);
    
//     // Optional: Add a beep sound or vibration
//     try {
//         navigator.vibrate(200); // Vibrate for 200ms if supported
//     } catch (e) {
//         // Vibration not supported
//     }
// }

// // Event listeners
// startButton.addEventListener('click', startScanning);
// stopButton.addEventListener('click', stopScanning);

// // Initialize on page load
// window.addEventListener('load', initScanner);
// =======================================================================================================

// OPEN AND CLOSE MENU
menu.addEventListener('click', () => {
  caisBtn.classList.toggle('show')
})

// CLOSE MENU WHEN THE USER CLICKS EACH BUTTON
const allMenuBtns = document.querySelectorAll('.caisBtn .btn');

allMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            closeMenu()
        }, 200);
    })
});


//ATTRIBUTE NAMES TO EACH SPECIFIC FORM
titleForm.forEach(title => {
  title.textContent = title.parentElement.parentElement.name
})

function closeMenu() {
  caisBtn.classList.remove('show')
}

// BUTONS ON MENU

//scanner

// scannerMenuBtn.addEventListener('click', () => {
//   formDescarga.style.display = 'none'
//   formCarga.style.display = 'none'
//   formPrep.style.display = 'none'
//   calcDiv.style.display = 'none'
//   calcDivTwo.style.display = 'none'
//   preInsSec.style.display = 'none'
//   faltasDiv.style.display = 'none'
//   searchBar.style.display = 'none'
//   scannerSection.style.display = 'grid'
// })

prepBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'grid'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'none'
  intervencaoDiv.style.display = 'none'


  // scannerSection.style.display = 'none'

})

descargaBtn.addEventListener('click', () => {
  formDescarga.style.display = 'grid'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'none'
  intervencaoDiv.style.display = 'none'

  // scannerSection.style.display = 'none'


})

cargaBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'grid'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'none'
  intervencaoDiv.style.display = 'none'

  // scannerSection.style.display = 'none'

})

calcBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'grid'
  calcDivTwo.style.display = 'grid'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'grid'
  intervencaoDiv.style.display = 'none'

  // scannerSection.style.display = 'none'


})

faltasBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'grid'
  searchBar.style.display = 'none'
  intervencaoDiv.style.display = 'none'

  // scannerSection.style.display = 'none'


})

intervencaoBtn.addEventListener('click', () => {
  formDescarga.style.display = 'none'
  formCarga.style.display = 'none'
  formPrep.style.display = 'none'
  calcDiv.style.display = 'none'
  calcDivTwo.style.display = 'none'
  preInsSec.style.display = 'none'
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'none'
  intervencaoDiv.style.display = 'grid'
  // scannerSection.style.display = 'none'

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

// ========================= DESCARGA =====================================
const subjectD = document.getElementById('subjectD');
const teamD = document.getElementById('teamD');
const submitD = document.getElementById('submitD');
const clientD = document.getElementById('clientD');
const obsD = document.getElementById('obsD');
const materialD = document.getElementById('materialD');
const dateD = document.getElementById('dateD')

// GET DATA FROM LOCALSTORAGE
document.addEventListener('DOMContentLoaded', () => {
  teamD.value = JSON.parse(localStorage.getItem('teamD'));
  clientD.value = JSON.parse(localStorage.getItem('clientD'));
  obsD.value = JSON.parse(localStorage.getItem('obsD'));
  materialD.value = JSON.parse(localStorage.getItem('materialD'));
  dateD.value = JSON.parse(localStorage.getItem('dateD'));
})

teamD.addEventListener('input', () => {

  let arrTeamD = [];

    arrTeamD.push(teamD.value)
   
   if (arrTeamD.length > 1) {
      arrTeamD = arrTeamD.slice(-1)
    }

  localStorage.setItem('teamD', JSON.stringify(arrTeamD));

});

clientD.addEventListener('input', () => {

  let arrClientD = [];

    arrClientD.push(clientD.value)
   
   if (arrClientD.length > 1) {
      arrClientD = arrClientD.slice(-1)
    }

  localStorage.setItem('clientD', JSON.stringify(arrClientD));

});

dateD.addEventListener('input', () => {

  let arrDateD = [];

    arrDateD.push(dateD.value)
   
   if (arrDateD.length > 1) {
      arrDateD = arrDateD.slice(-1)
    }

  localStorage.setItem('dateD', JSON.stringify(arrDateD));

})

obsD.addEventListener('input', () => {

  let arrObsD = [];

    arrObsD.push(obsD.value)
   
   if (arrObsD.length > 1) {
      arrTeamD = arrObsD.slice(-1)
    }

  localStorage.setItem('obsD', JSON.stringify(arrObsD));

});

materialD.addEventListener('input', () => {

  let arrMaterialD = [];

    arrMaterialD.push(materialD.value)
   
   if (arrMaterialD.length > 1) {
      arrMaterialD = arrMaterialD.slice(-1)
    }

  localStorage.setItem('materialD', JSON.stringify(arrMaterialD));

})


const deleteDescarga = document.querySelector('.btn-clear-descarga');

function deleteDescargaFunction () {

  localStorage.removeItem('clientD');
  localStorage.removeItem('teamD');
  localStorage.removeItem('obsD');
  localStorage.removeItem('materialD');
  localStorage.removeItem('dateD');

  window.location.reload();

}

deleteDescarga.addEventListener('click', () => {
  deleteDescargaFunction()    
});

// EMAIL SUBJECT AND TITLES TO DESCARGA

submitD.addEventListener('click', (event) => {
        if (teamD.value !== '') {
       subjectD.value = `DESCARGA do ${teamD.value} de ${clientD.value}`;
   }
})

// PRINT INTERVENÇÃO

const printBtnIntervencao = document.querySelector('#printBtnIntervencao');
const deleteBtnIntervencao = document.querySelector('.btn-clear-intervencao');
const submitBtnIntervencao = document.querySelector('#submitIntervencao');
const printIntervencaoDiv = document.querySelector('.printModeIntervencao');
const teamNamesToPrint = document.querySelector('#printTeamIntervencao');
const teamNames = document.querySelector('#teamIntervencao');
const addressIntervencao = document.querySelector('#addressIntervencao');
const printAddressIntervencao = document.querySelector('#printAddressIntervencao');
const clientIntervencao = document.querySelector('#clientIntervencao');
const printClientIntervencao = document.querySelector('#printClientIntervencao');
const dateIntervencao = document.querySelector('#dateIntervencao');
const printDateIntervencao = document.querySelector('#printDateIntervencao');
const tasksIntervencao = document.querySelector('#tasksIntervencao');
const printTasksIntervencao = document.querySelector('#printTasksIntervencao');
const logo = document.querySelector('.logoCrisavacPrint');
const obsIntervencao = document.querySelector('#obsIntervencao');
const printObsIntervencao = document.querySelector('#printObsIntervencao');

deleteBtnIntervencao.addEventListener('click', () => {
    localStorage.removeItem('CLIENTE: ');
    localStorage.removeItem('MORADA: ');
    localStorage.removeItem('TÉCNICOS: ');
    localStorage.removeItem('DATA: ');
    localStorage.removeItem('tasksIntervencao');
    localStorage.removeItem('OBSERVAÇÕES: ');
    window.location.reload();
})

document.addEventListener('DOMContentLoaded', () => {
  clientIntervencao.value = JSON.parse(localStorage.getItem('CLIENTE: '));
  addressIntervencao.value = JSON.parse(localStorage.getItem('MORADA: '));
  teamNames.value = JSON.parse(localStorage.getItem('TÉCNICOS: '));
  dateIntervencao.value = JSON.parse(localStorage.getItem('DATA: '));
  tasksIntervencao.value = JSON.parse(localStorage.getItem('tasksIntervencao'));
  obsIntervencao.value = JSON.parse(localStorage.getItem('OBSERVAÇÕES: '));
})

printBtnIntervencao.addEventListener('click', () => {
  printCargaDiv.style.display = 'none'
  printPreInsDiv.style.display = 'none'
  printPrepDiv.style.display = 'none'
  printFaltasDiv.style.display = 'none'
  printIntervencaoDiv.style.display = 'grid'
  logo.classList.remove('displayNone')
  window.print()
});

const allIntervencaoInputs = intervencaoDiv.querySelectorAll('div input');

allIntervencaoInputs.forEach(input => {

  input.addEventListener('input', () => {
    addInputsValuesToPrint('CLIENTE: ', clientIntervencao, printClientIntervencao);
    addInputsValuesToPrint('MORADA: ', addressIntervencao, printAddressIntervencao);
    addInputsValuesToPrint('TÉCNICOS: ', teamNames, teamNamesToPrint);
    addInputsValuesToPrint('DATA: ', dateIntervencao, printDateIntervencao);
    addInputsValuesToPrint('OBSERVAÇÕES: ', obsIntervencao, printObsIntervencao);
  })


})

tasksIntervencao.addEventListener('input', () => {
  printTasksIntervencao.innerText = `${tasksIntervencao.value}`;

  localStorage.setItem('tasksIntervencao', JSON.stringify(tasksIntervencao.value));

})

function addInputsValuesToPrint(description, inputId, idToPrint) {
  
  idToPrint.textContent = `${description} ${inputId.value}`;

  localStorage.setItem(`${description}`, JSON.stringify(inputId.value));
}



// PRINT CARGA
const printBtnCarga = document.querySelector('#printBtnCarga')
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
const printCargaDiv = document.querySelector('#toPrint') // CARGA DIV to print

printBtnCarga.addEventListener('click', () => {
  printCargaDiv.style.display = 'grid'
  printPreInsDiv.style.display = 'none'
  printPrepDiv.style.display = 'none'
  printFaltasDiv.style.display = 'none'
  printIntervencaoDiv.style.display = 'none'
  window.print()
})

clientC.addEventListener('input', () => {
  clientName.textContent = clientC.value
})

material.addEventListener('input', () => {
  list.innerText = material.value
  returnDiv.innerText = material.value
  deleteNumbToReturn()
})

dateC.addEventListener('input', () => {
  datePrint.textContent = dateC.value
})

function deleteNumbToReturn () {
  let numbersToDelete = new RegExp(/(\d+)[.,]*(\d*)(\s+)/g)
  let myreturnText = list.innerText.replace(numbersToDelete, "")

  list.innerText = list.innerText.replace(/;/g, "\n")
  returnDiv.innerText = myreturnText.replace(/;/g, "\n")
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

// ============================ PREPARAR ========================================
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

// PREPARAR MATERIAL
document.addEventListener('DOMContentLoaded', () => {
  clientP.value = JSON.parse(localStorage.getItem('clientP'));
  faturaP.value = JSON.parse(localStorage.getItem('faturaP'));
  localP.value =  JSON.parse(localStorage.getItem('localP'));
  obsP.value = JSON.parse(localStorage.getItem('obsP'));
  teamP.value = JSON.parse(localStorage.getItem('teamP'));
  materialPrep.value = JSON.parse(localStorage.getItem('materialP'));
  
})

printBtnPrep.addEventListener('click', () => {
  printPrepDiv.style.display = 'grid'
  printPreInsDiv.style.display = 'none'
  printCargaDiv.style.display = 'none'
  printFaltasDiv.style.display = 'none'
  printIntervencaoDiv.style.display = 'none'
  window.print();
})

faturaP.addEventListener('input', () => {
  faturaPrintPrep.textContent = faturaP.value;

  let arrFaturaP = [];

    arrFaturaP.push(faturaP.value)
   
   if (arrFaturaP.length > 1) {
      arrFaturaP = arrFaturaP.slice(-1)
    }

  localStorage.setItem('faturaP', JSON.stringify(arrFaturaP));

})

clientP.addEventListener('input', () => {
  clientNamePrep.textContent = "Cliente: " + clientP.value;
  let arrClientP = [];

    arrClientP.push(clientP.value)
   
   if (arrClientP.length > 1) {
      arrClientP = arrClientP.slice(-1)
    }

  localStorage.setItem('clientP', JSON.stringify(arrClientP));

})

dateP.addEventListener('input', () => {
  datePrintPrep.textContent = dateP.value;
})

localP.addEventListener('input', () => {
  localPrint.textContent = "Local: " + localP.value;

  let arrLocalP = [];

    arrLocalP.push(localP.value)
   
   if (arrLocalP.length > 1) {
      arrLocalP = arrLocalP.slice(-1)
    }

  localStorage.setItem('localP', JSON.stringify(arrLocalP));

})

obsP.addEventListener('input', () => {
  obsPrintPrep.textContent = obsP.value;

  let arrObsP = [];

    arrObsP.push(obsP.value)
   
   if (arrObsP.length > 1) {
      arrObsP = arrObsP.slice(-1)
    }

  localStorage.setItem('obsP', JSON.stringify(arrObsP));
})

teamP.addEventListener('input', () => {
  teamPrint.textContent = teamP.value

  let arrTeamP = [];

    arrTeamP.push(teamP.value)
   
   if (arrTeamP.length > 1) {
      arrTeamP = arrTeamP.slice(-1)
    }

  localStorage.setItem('teamP', JSON.stringify(arrTeamP));

})

materialPrep.addEventListener('input', () => {
  listPrep.innerText = materialPrep.value
  cargaPrep.innerText = materialPrep.value

  let arrMaterialP = [];

  arrMaterialP.push(materialPrep.value)
 
 if (arrMaterialP.length > 1) {
    arrMaterialP = arrMaterialP.slice(-1)
  }

localStorage.setItem('materialP', JSON.stringify(arrMaterialP));

  deleteNumbToReturnOnPrep()
})

// DELETE QUANTITY FROM ITEMS AND ADD NEW LINES WITH ";"
function deleteNumbToReturnOnPrep() {
  let numbersToDelete = new RegExp(/(\d+)[.,]*(\d*)(\s+)/g)
  let myreturnText = listPrep.innerText.replace(numbersToDelete, "")

  listPrep.innerText = listPrep.innerText.replace(/;/g, "\n")
  cargaPrep.innerText = myreturnText.replace(/;/g, "\n")
 
}

// EMAIL SUBJECT AND TITLE TO PREPARAR for working on formsubmit - not valid on netlify forms
const submitP = document.querySelector('#submitP')
const subjectP = document.querySelector('#subjectP')

submitP.addEventListener('click', () => {
  if (clientP.value !== '') {
    subjectP.value = `PREPARAR MATERIAL PARA ${clientP.value}`;
  } 
})

// CLEAR ALL PREPARAR FORM
const deleteFormPrep = document.querySelector('.btn-clear-preparacao');

deleteFormPrep.addEventListener('click', () => {
  localStorage.removeItem('clientP');
  localStorage.removeItem('faturaP');
  localStorage.removeItem('teamP');
  localStorage.removeItem('obsP');
  localStorage.removeItem('materialP');
  localStorage.removeItem('localP');
  window.location.reload()
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
      calcBtn[i].parentElement.style.backgroundColor = 'var(--green-two)';
      calcBtn[i].parentElement.querySelector('h2').style.color = 'var(--white)';
      calcBtn[i].parentElement.querySelector('h3').style.color = 'var(--white)';

      conversaoParaMetros(i)
    });

   
  })
  let input = document.querySelectorAll('.weightValueMt');
    input.forEach((el,i) => {
      el.addEventListener('keydown' , (event) => {
        if (event.key === 'Enter') {
          el.parentElement.style.backgroundColor = 'var(--green-two)';
          el.parentElement.querySelector('h2').style.color = 'var(--white)';
          el.parentElement.querySelector('h3').style.color = 'var(--white)';

      conversaoParaMetros(i)
          
        }
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
        calcBtnAmount[i].parentElement.style.backgroundColor = 'var(--green-two)';
        calcBtnAmount[i].parentElement.querySelector('h2').style.color = 'var(--white)';
        calcBtnAmount[i].parentElement.querySelector('h3').style.color = 'var(--white)';

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
  faltasDiv.style.display = 'none'
  searchBar.style.display = 'none'
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
const allInputsFromPvc = document.querySelectorAll('.radioButton');


// AddEventListener's for Each input


allInputsFromPvc.forEach(radioButton => {

  radioButton.addEventListener('click', () => {

    let radioButtonValue = radioButton.parentElement.querySelector('.mtValue');
    
    radioButtonValue.removeAttribute("disabled", '');
  })

})

allInputsWithMeters.forEach(input => {

  input.addEventListener('change', () => {
    
    let inputName = input.parentElement.querySelector('label').textContent;
    let inputValue = input.value;
    
    saveInputValue(inputValue, inputName);
    
  
  });
  
});


function saveInputValue(inputValue, inputName) {
  let newItem = '';
  
console.log(typeof(inputName));

  let inputType = inputName.split('')[1]

  console.log(inputType);
  

  if (inputType === '/') {
    newItem = inputValue + ' Metros de Cobre de ' + inputName + `<br>`;
  }
  else if (inputType === 'G') {
    newItem = inputValue + ' Metros de Cabo ' + inputName + `<br>`;
  }
  else if (inputType === 'u') {
    newItem = inputValue + ' Metros de ' + inputName + `<br>`;
  }
  else {
    newItem =  inputValue + ' Unidades de ' + inputName + `<br>`;
  }

  printListPreIns.innerHTML += newItem
}



printBtnPreIns.addEventListener('click', () => {
  printPreInsDiv.style.display = 'grid'
  printPrepDiv.style.display = 'none'
  printCargaDiv.style.display = 'none'
  printFaltasDiv.style.display = 'none'
  printIntervencaoDiv.style.display = 'none'
  window.print()
})

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


// delete button

let deletePreIns = document.querySelector('.btn-clear-pre-instalacao');

deletePreIns.addEventListener('click', () => {
  let allInputsPreIns = document.querySelectorAll('input')
  allInputsPreIns.forEach(el => {
    el.value = ''
  })
  location.reload()
})







// JAVACRIPT CODE TO FALTAS SECTION/DIV



const submitFaltas = document.querySelector('#submitFaltas')
const subjectFaltas = document.querySelector('#subjectFaltas')
const clientFaltas = document.querySelector('#clientFaltas')
const clientFaltasPrint = document.querySelector('#clientFaltasPrint')
const fornecedorName = document.querySelector('#fornecedorFaltas')
const fornecedorFaltasPrint = document.querySelector('#fornecedorFaltasPrint')
const dateFaltas = document.querySelector('#dateFaltas')
const dateFaltasPrint = document.querySelector('#dateFaltasPrint')
const obsFaltas = document.querySelector('#obsFaltas')
const materialFaltas = document.querySelector('#materialFaltas')
const materialFaltasPrint = document.querySelector('#faltasContainer')
const orderedYes = document.querySelector('#encomendaSim')
const orderedNo = document.querySelector('#encomendaNao')

clientFaltas.addEventListener('input', () => {
  clientFaltasPrint.textContent = clientFaltas.value
})

fornecedorName.addEventListener('input', () => {
  fornecedorFaltasPrint.textContent = 'Fornecedor: ' + fornecedorName.value
})

dateFaltas.addEventListener('input', () => {
  dateFaltasPrint.textContent = 'Disponivel a: ' + dateFaltas.value
})

materialFaltas.addEventListener('input', () => {
  materialFaltasPrint.innerText = materialFaltas.value
  materialFaltasPrint.innerText = materialFaltasPrint.innerText.replace(/;/g, "\n")
 
})

// EMAIL SUBJECT AND TITLE TO FALTAS

submitFaltas.addEventListener('click', () => {
  if (clientFaltas.value !== '') {
    subjectFaltas.value = `MATERIAL EM FALTA P/${clientFaltas.value}`;
  }
})

function isAlreadyOrdered () {

  let orderedDiv = document.querySelector('#orderedDiv')

  orderedYes.addEventListener('click', () => {
    if (orderedYes.checked) {
      orderedDiv.textContent = 'Material em falta já está encomendado'
    }
  })

  orderedNo.addEventListener('click', () => {
    if (orderedNo.checked) {
      orderedDiv.textContent = 'É necessário encomendar o material em falta'
    }
  })  
}

isAlreadyOrdered()

const printBtnFaltas = document.querySelector('#printBtnFaltas')
printBtnFaltas.addEventListener('click', () => {
  printFaltasDiv.style.display = 'grid'
  printPreInsDiv.style.display = 'none'
  printCargaDiv.style.display = 'none'
  printPrepDiv.style.display = 'none'
  printIntervencaoDiv.style.display = 'none'

  window.print();
})

// ============================ OBSERVAÇÕES PRINT FALTAS==============================

obsFaltas.addEventListener('input', () => {
  let printObsFaltas = document.querySelector('#printObsFaltas');

  printObsFaltas.textContent = obsFaltas.value;

  function showsObs () {

    if (obsFaltas.value !== "") {
      printObsDiv.style.display = 'grid'
    }
    else return

  }  

  showsObs()
})

