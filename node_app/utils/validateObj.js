function validateObj(keys, obj) {
    for(let key of Object.keys(obj)) {
        if(!keys.includes(key) && key !== "id") {
            throw new Error("Incompatible Object")
        }
    }
}
module.exports = validateObj;