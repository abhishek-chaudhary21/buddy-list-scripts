import axios from "axios"
import fs from 'fs'
import _ from 'lodash'
import { basePath, options } from "./data/datainput.js"

const addForUserStart = 143 //this id included
const addForUserEnd = 200

const numberOfBuddies = 100
const startFrom = 1350

// configs for addBuddies Via Data:
const batchSize = 12
const userId = `xyz`

const addBuddies = async () => {
    const buddiesIds = []
    try{
        for (let i = startFrom; i<startFrom+numberOfBuddies; i++){
            buddiesIds.push(`user${i}`)
        }
    
        for (let j = addForUserStart; j<=addForUserEnd; j++){
            // remove self id if present 
            const buddies = _.without(buddiesIds, `user${j}`)
            

            const addBuddiesUrl = `${basePath}/user${j}/addBuddies`
            const result = await axios.post(addBuddiesUrl, {buddies : buddies}, options)
            console.log(`Successfully added buddies for ${j} user`)
        }
    } catch (err) {
        console.log(err)
    }
}

const addBuddiesFromData = (user) => {
    try{
        const addBuddiesUrl = `${basePath}/${user}}/addBuddies`
        let addBuddyList = []
        const addBuddyJson = fs.readFileSync(`./data/addBuddiesData.json`)
        let addBuddyIdsList = JSON.parse(addBuddyJson).buddies
        // remove self id if present 
        addBuddyIdsList = _.without(addBuddyIdsList, `${user}`)
        let addBuddyIdsBatchList = []
        for (const buddyId of addBuddyIdsList){
            addBuddyIdsBatchList.push(buddyId)
            if(addBuddyIdsBatchList.length === batchSize ||  buddyId === _.last(addBuddyIdsList)){
                // const result = await axios.post(addBuddiesUrl, {buddies : addBuddyIdsBatchList}, options)
                console.log(`Added users till user_id: "${buddyId}"`)
                addBuddyIdsBatchList = []
            }
        }
        console.log(`DONE!!!!`)
        }catch (err){
            console.log(err)
        }
}

// uncomment to add predefined buddies
// addBuddies()
//uncomment to add buddies from ./data/addBuddiesData.json 
// addBuddiesFromData(userId)