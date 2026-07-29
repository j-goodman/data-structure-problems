// linked-list.js
// 1.
const findCarByName = (head, targetName) => {
    let location = head
    while (location) {
        if (location.name === targetName) return location
        location = location.next
    }
    return null
}
// 2.
const addTrainCar = (head, name, passengers) => {
    const newCar = {
        name: name,
        passengers: passengers,
        next: null
    }
    let location = head
    while (location.next) location = location.next
    location.next = newCar
}
// 3.
const getLastCar = (head) => {
    let location = head
    while (location.next) location = location.next
    return location
}
// 4.
const removeCarByName = (head, targetName) => {
    if (!head) return null
    if (head.name === targetName) return head.next

    let previousCar = head
    let location = head.next

    while (location && location.name !== targetName) {
        previousCar = location
        location = location.next
    }

    if (location) previousCar.next = location.next

    return head
}