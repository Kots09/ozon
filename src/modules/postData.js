const postData = (str) => {
    // return fetch('http://localhost:3000/goods/26', {
    //     method: 'DELETE',

    // })
    // .then((res) => res.json())
    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Игра",
            price: 1,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => res.json())


}

export default postData