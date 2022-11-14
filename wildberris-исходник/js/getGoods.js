const getGoods = function () {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
            fetch('https://wb-glo-int-korvet-default-rtdb.firebaseio.com/db.json')
                .then((res) => res.json())
                .then((data) =>{
                    console.log(data);
                })
    }
    
    links.forEach( (link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            console.log('Cunt');
        })
    })
}

getGoods();

