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
  searchNumbers()
  delSemiCol()
  //  deltest()
}) 

dateC.addEventListener('input', () => {
  datePrint.textContent = dateC.value
})

patC.addEventListener('input', () => {
  patPrint.textContent = "PAT: " + patC.value
})

function searchNumbers() {
  let array = returnDiv.innerText.split('')
  console.log(array)
  let arr = (returnDiv.innerText).split(/^\d*\s+/g);
  console.log(arr)
  arr = arr.toString().replace(/;\d{1,3}/g , ";")
  console.log(arr)
  arr = arr.replace(/^,/, " ")
  let test = arr
  console.log(test)
  test = test.replace(/;/g, "\n")
  console.log(test)
  returnDiv.innerText = test
}


function delSemiCol () {
  let a = list.innerText.toString().replace(/;/g, "\n")

  list.innerText = a
}
// function deltest() {
//   let a = (list.innerText).split(/;/g)
//   console.log(list.innerText)
//   console.log(a)
//   list.innerText = a.join(' ')
// }

