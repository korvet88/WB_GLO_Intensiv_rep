const search = function () {
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');


    let val = [];

    input.addEventListener('input', (event) => {
        val = event.target.value;
        return val;
    })
    searchBtn.addEventListener('click', () => {
        console.log(val);
    })
}

search ()
