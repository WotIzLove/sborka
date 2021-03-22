import shopItems from './shopItems.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchShopItems () {
        return fetch(shopItems, 1000)
    }
}
