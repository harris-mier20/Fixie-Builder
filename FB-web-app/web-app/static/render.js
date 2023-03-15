//file handles how objects are rendered

const Render = Object.create(null);
import Ajax from "./ajax.js";

//function to clone a template from html
Render.cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

//function takes 2 argurments
//an array and a value
//returns the index of the list object that cobtains that value
//under the key "name"
Render.find_index = function (array, value) {
    let i = 0;
    while (i < array.length) {
        if (array[i].name === value) {
            return i;
        }
        i = i + 1;
    }
};

export default Object.freeze(Render);