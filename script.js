const formDescarga = document.querySelector('.formDescarga')
const descargaBtn = document.getElementById('descargaBtn')
const formCarga = document.querySelector('.formCarga')
const cargaBtn = document.getElementById('cargaBtn')

descargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'grid'
    formCarga.style.display = 'none'
})

cargaBtn.addEventListener('click', () => {
    formDescarga.style.display = 'none'
    formCarga.style.display = 'grid'
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
}) 

dateC.addEventListener('input', () => {
  datePrint.textContent = dateC.value
})

patC.addEventListener('input', () => {
  patPrint.textContent = "PAT: " + patC.value
})

function deleteNumbToReturn () {
  let numbersToDelete = new RegExp(/(\d+)[.,]*(\d*)(\s+)/g)
  let myreturnText = list.innerText.replace(numbersToDelete, "")

  list.innerText = list.innerText.replace(/;/g, "\n")
  // returnDiv.innerText = myreturnText
  returnDiv.innerText = myreturnText.replace(/;/g, "\n")
  console.log(myreturnText)
}


// ===================== Click the Whatsapp Button =========================

const whatsappBtn = document.querySelector('#whatsappBtn');

whatsappBtn.addEventListener('click', () => {
  sendValuesToWhatsapp()
})

function sendValuesToWhatsapp() {
  let wtMessage = material.value.replace(/;/g, "%0a")
  let sendMaterialWt = "Carga para: " + "%0a" +
                       clientC.value + "%0a" + 
                       "PAT: " + patC.value + "%0a" + "%0a" +
                       "MATERIAL:" + "%0a" + wtMessage;

  let number = +351963120728;

  let url = "https://wa.me/" + number + "?text=" + sendMaterialWt;
 
  window.open(url, '_blank');
}
