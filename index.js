const shoppingList = [];

const UIList = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");


function addItem (item) {
    if (item === undefined) { //If function was triggered by button press instead of called in Javascript code
        item = itemInput.value.trim();
    }
    for (let i in shoppingList) {
        if (shoppingList[i].toLowerCase() === item.toLowerCase()) {
            console.log("Item " + item + " already found!");
            return;
        }
    }
    console.log("Adding " + item + " to list!");
    shoppingList.push(item);
    let newEntry = document.createElement('li');
    newEntry.appendChild(document.createTextNode(item));
    UIList.appendChild(newEntry);
    itemInput.value = "";
    return;
}

function removeLastItem () {
    let removed = shoppingList.pop();
    console.log("Last Item " + removed + " removed!");
    const lastChild = UIList.lastElementChild; // create a reference to the last child node on the parent node
    if (lastChild) {                            // check to ensure that a last child node exists to prevent errors
        UIList.removeChild(lastChild);
    }
    return;
}

function displayList () {
    console.log("Shopping List: ");
    for (let i in shoppingList) {
        console.log(i + ": " + shoppingList[i]);
    }
    return;
}

function filterItems (item) {
    let filteredList = shoppingList.filter((i) => {
        return i.toLowerCase().includes(item.toLowerCase());
    })
    console.log("Filtering for: " + item);
    for (let i in filteredList) {
        console.log("filtered " + i + ": " + filteredList[i]);
    }
    return;
}

// addItem("milk");
// addItem("eggs");
// displayList();
// removeLastItem();
// displayList();
// addItem("bread");
// addItem("apples");
// addItem("milk");
// displayList();
// addItem("wheat bread");
// addItem("bread pudding");
// filterItems("Bread");