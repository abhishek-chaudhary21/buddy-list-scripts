import axios from "axios"
import _ from 'lodash'
import { basePath, options } from "./datainput.js"

const addForUserStart = 143 //this id included
const addForUserEnd = 200

const numberOfBuddies = 100
const startFrom = 1350

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

addBuddies()