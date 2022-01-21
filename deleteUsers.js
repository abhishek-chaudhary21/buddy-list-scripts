import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'
import { basePath, options } from "./data/datainput.js"

const batchesOf = 10

const deleteUserStart = 1
const deleteUserEnd = 200

const deleteUserPath = `${basePath}/deleteUsers`

const deleteUsers = async () => {
    let deleteUserIds = []
    for (let i = deleteUserStart; i<= deleteUserEnd; i++){
        deleteUserIds.push(`user${i}`)
        if(deleteUserIds.length === batchesOf || i === deleteUserEnd){
            const startTime = moment().valueOf()
            console.log(deleteUserIds)
            const result = await axios.post(deleteUserPath, {users: deleteUserIds}, options)
            console.log(`Time: ${moment().valueOf() - startTime} ms `)
            console.log(`Deleted till ${i}`)
            deleteUserIds = []
        }
    }
}

deleteUsers()


// const result = await axios.get(`${basePath}/searchUser?search=user5`, options)
// console.log(result)
