const {pool} = require("../../dependensies");

async function login(obj){
    const client = await pool.connect()
    try{
        const result = await client.query(`SELECT *`)
        console.log(result, obj)
    }
    catch (e) {
        console.error(e.message, e.stack)
    }
    finally {
        console.log("Release client login")
        client.release()
    }
}

module.exports = {
    login:                    login,
};
