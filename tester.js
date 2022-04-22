import LinkedList from './Linked-List.js';
main();

function main(){
    let isSuccessful = addTest();
     if (!isSuccessful) {
         console.log("Add test failed.");
     } else console.log("Add test succeeded.");

}

/**
 * @brief fills an array with the same elements as the linked list
 *        and makes sure that they match.
 * @returns 
 */
function addTest(){
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
    return true;
}