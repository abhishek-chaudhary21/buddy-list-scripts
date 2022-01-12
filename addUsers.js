import axios from 'axios'
import _ from 'lodash'
import { basePath,
    authToken,
    images} from "./datainput.js"

const addUserPath = `${basePath}/addUsers`
// add users configuration data
const startFrom = 1 // default start with 1
const totalUsers = 100
const batchOf = 100


const addUsers = async () => {

    try{
        for (let i = startFrom; i<= totalUsers; i = i+batchOf){
            const users = []
            for (let j = i; j<i+batchOf; j++){
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
            console.log(`Successfully Added ${i+batchOf-1} users`)
        }
        console.log(`DONE!!!!`)
    } catch (err){
        console.log(err)
    }
}

addUsers()
