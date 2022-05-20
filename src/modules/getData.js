const getData = (str) => {
    return fetch('https://test-3ca8f-default-rtdb.firebaseio.com/goods.json')
        .then(response => {
            return response.json()
        })

}

export default getData