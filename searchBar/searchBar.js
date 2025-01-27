const searchBar = document.querySelector('.searchBar');
const calcDivOne = document.querySelector('.calculation');
const allItemsToCalcMeters = calcDivOne.querySelectorAll('.calculation-box');
const calcBtn = document.querySelector('#calcBtn')

searchBar.addEventListener('input', () => {

    const items = document.querySelectorAll('.calculation-box .productName')
    
    items.forEach(item => {
    let toSearch = searchBar.value.toLowerCase();

        const itemtextContent = item.textContent.toLowerCase();
        if ( itemtextContent.includes(toSearch) ) {
            console.log(item.parentElement);
            
            item.parentElement.classList.remove('disappear');
        }
        else {

            item.parentElement.classList.add('disappear')
        }
    })
})
