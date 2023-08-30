const { v4: uuidv4 } = require('uuid');


module.exports.handler = async function() {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World! ' + uuidv4(),
        }),
    }
}
