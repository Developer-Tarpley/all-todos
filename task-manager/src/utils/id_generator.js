/**
 * Task ID Generator
 */

const charArray = [
    " ", "1", "a", "2", "b", "3", "c",
    "4", "d", "5", "e", "6", "f",
    "7", "g", "8", "h", "9", "i",
    "0"
]

export const Create_IDs = () => {
    let id = ""
    const min = 1;
    const max = charArray.length;
    let idLength = 8
    while(idLength > 0){
        let index = Math.floor(Math.random() * (max - min) + 1);
        id += charArray[index];
        idLength--
    };
    return id;
}


export default {
    Create_IDs
}