function validateUUID(id) {
    const regex = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/;
    if(!regex.test(id)) {
        throw new Error("Id is not valid");
    }
}

module.exports = validateUUID;