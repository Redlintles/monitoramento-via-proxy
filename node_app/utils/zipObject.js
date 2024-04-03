function zipObj(keys,values) {
    return Object.fromEntries(keys.map((k,i) => [k,values[i]]));
}

module.exports = zipObj;