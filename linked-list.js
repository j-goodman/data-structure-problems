newTrainCar = (name, passengers) => {
    return {
        name: name,
        passengers: passengers,
        next: null
    };
}

const head = newTrainCar("engine car", 0);

head.next = newTrainCar("second car", 30);
head.next.next = newTrainCar("third car", 23);
head.next.next.next = newTrainCar("dining car", 5);
head.next.next.next.next = newTrainCar("baggage car", 3);
head.next.next.next.next.next = newTrainCar("caboose", 7);

// This data structure is a LINKED LIST. Try writing the following functions that interact with it:

// 1. Find car by name. Write a function that takes in a name (ie, "dining car") and returns the node with that name. If there is no such node, return null.

const findCarByName = (head, targetName) => {
    let location = head
    while (location) {
        if (location.name === targetName) {
            return location
        }
        location = location.next
    }
    return null
}

// 2. Write a function that adds a new car to the end of the list. It can call the "newTrainCar" function if you want, but it must then actually add the car to the end of the train (after the caboose).

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

// 3. Get last car. Write a function that returns the last node in the linked list. If the list is empty, return null.

const getLastCar = (head) => {
    let location = head
    while (location.next) location = location.next
    return location
}

// 4. Remove car by name. Write a function that takes in a name and removes the first node with that name. If the name is not found, do nothing.

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

removeCarByName(head, "dining car")