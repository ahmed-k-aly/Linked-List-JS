import LinkedList from './Linked-List.js';
main();

function main(){
    
    let isAddSuccessful = addTest();
     if (!isAddSuccessful) {
         console.log("Add test failed.");
     } else console.log("Add test succeeded.");
    let isRemoveSuccessful = removeTest();
    if (!isRemoveSuccessful) {
        console.log("Remove test failed.");
    } else console.log("Remove test succeeded.");
}

/**
 * @brief fills an array with the same elements as the linked list
 *        and makes sure that they match.
 * @returns 
 */
function addTest(){
    for (let _ = 0; _< 100; _++) {
        let elements = [];
        let ll = new LinkedList();
        let arrayLength = Math.floor((1+Math.random()) * 100);
        for (let i = 0; i < arrayLength; i++) {
            elements[i] = i;
            ll.insert(i);
        }
        for (let i = 0; i < arrayLength; i++) {
            if (ll.contains(elements[i])){
                continue;
            }
            return false;
        }
    }
    return true;
}

function removeTest(){
    let ll = new LinkedList();
    for (let _ = 0; _ <100; _++){
        let removeNull = ll.remove(10);
        if (removeNull) return false;
        let numElements = Math.floor(1+(Math.random() * 100));
        for (let i = 0; i < numElements; i++) {
            // populate the linked list.
            ll.insert(i);
        }
        if (ll.size() != numElements) {
            console.log("size method failed");
            return false;
        }
        while (ll.size() > 0) {
            // choose a random element to remove from the list
            let numToRemove = Math.floor((Math.random()) * numElements);
            let isNumInList = ll.contains(numToRemove);
            let isNumRemoved = ll.remove(numToRemove);
            if (isNumRemoved != isNumInList){
                return false;
            }
        }
        for (let i = 0; i < numElements; i++){
            // populate the linked list with one value.
            ll.insert(0);
        }
        while (ll.size() > 0) {
            // empt the linked list
            let isNumRemoved = ll.remove(0);
            if (!isNumRemoved){
                return false;
            }
        }
    }
    return true;

}