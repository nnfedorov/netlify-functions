const { v4: uuidv4 } = require('uuid');
const { loadImage } = require('canvas');
const fs = require('fs');


module.exports.handler = async function(params, ctx) {
    console.log(process.version);
    
    const { password } = params.queryStringParameters;

    // if (password !== 'qqq') {
    //     return {
    //         statusCode: 400,
    //         body: JSON.stringify({ error: 'invalid password' })
    //     };
    // }
    
    const data = await fs.promises.readFile(__dirname + '/data.json', { encoding: 'UTF-8' });

    console.log(JSON.stringify(data));
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Password = ${password}, operation id = ${uuidv4()}`
        }),
    }
}
