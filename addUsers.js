import axios from 'axios'
import fs from 'fs'
import _ from 'lodash'
import { basePath,
    authToken,
    images} from "./data/datainput.js"

const addUserPath = `${basePath}/addUsers`

// add users configuration data
const startFrom = 1 // default start with 1
const totalUsers = 100
const batchSize = 100


const addUsers = async () => {

    try{
        for (let i = startFrom; i<= totalUsers; i = i+batchSize){
            const users = []
            for (let j = i; j<i+batchSize; j++){
                const user = {
                    user_id : `buddy${j}`,
                    user_display_name: `first Last${j}`,
                    additional_data: {
                        first_name: `firstName${j}`,
                        last_name: `lastName${j}`,
                        image : images[_.random(99, false)]
                    }
                }
                users.push(user)
            }
            console.log(users)
            const options = {
                headers: {
                    authorization : authToken,
                    'content-type' : 'application/json'
                }
            }
            // const result = await axios.post(addUserPath, users, options)
            console.log(`Successfully Added ${i+batchSize-1} users`)
        }
        console.log(`DONE!!!!`)
    } catch (err){
        console.log(err)
    }
}

const addUsersFromData = async () => {
    try{
        let addUsersList = []
        const addUsersJson = fs.readFileSync(`./data/addUsersData.json`)
        addUsersList = JSON.parse(addUsersJson)
        let adduserBatchList = []
        for (const user of addUsersList){
            adduserBatchList.push(user)
            const currentuserId = _.get(user, 'user_id')
            if(adduserBatchList.length === batchSize ||  currentuserId === _.get(_.last(addUsersList), 'user_id')){
                const result = await axios.post(deleteUserPath, {users: deleteUserIds}, options)
                console.log(`Added users till user_id: "${currentuserId}"`)
                adduserBatchList = []
            }
        }
        console.log(`DONE!!!!`)
        }catch (err){
            console.log(err)
        }
}

// uncomment to add predefined users in format user#
// addUsers()
//uncomment to add users from ./data/addUsersData.json 
// addUsersFromData()