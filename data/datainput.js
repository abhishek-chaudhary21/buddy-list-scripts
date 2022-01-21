const awsPath = `https://0d9puvrkk4.execute-api.us-west-2.amazonaws.com/dev`
const kurogoAppId = `buddy68`
const basePath = `${awsPath}/${kurogoAppId}`

const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtleVR5cGUiOiJkZWZhdWx0In0.eyJzY29wZSI6W3siZW5kcG9pbnQiOiIvOmt1cm9nb0FwcElkL2dlbmVyYXRlVG9rZW4iLCJtZXRob2QiOiJQT1NUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvOnVzZXJJZC9nZXRCdWRkeUxpc3QiLCJtZXRob2QiOiJHRVQifSx7ImVuZHBvaW50IjoiLzprdXJvZ29BcHBJZC86dXNlcklkL2dldEJ1ZGR5TGlzdElkcyIsIm1ldGhvZCI6IkdFVCJ9LHsiZW5kcG9pbnQiOiIvOmt1cm9nb0FwcElkL2dldEFsbFVzZXJzIiwibWV0aG9kIjoiR0VUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvZ2V0VXNlcnMiLCJtZXRob2QiOiJQT1NUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvYWRkVXNlcnMiLCJtZXRob2QiOiJQT1NUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvOnVzZXJJZC9hZGRCdWRkaWVzIiwibWV0aG9kIjoiUE9TVCJ9LHsiZW5kcG9pbnQiOiIvOmt1cm9nb0FwcElkLzp1c2VySWQvcmVtb3ZlQnVkZGllcyIsIm1ldGhvZCI6IlBPU1QifSx7ImVuZHBvaW50IjoiLzprdXJvZ29BcHBJZC9zZWFyY2hVc2VyIiwibWV0aG9kIjoiR0VUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvOnVzZXJJZC9zZWFyY2hCdWRkaWVzIiwibWV0aG9kIjoiR0VUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvOnVzZXJJZC91cGRhdGVVc2VyRGV0YWlscyIsIm1ldGhvZCI6IlBBVENIIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvZGVsZXRlVXNlcnMiLCJtZXRob2QiOiJQT1NUIn0seyJlbmRwb2ludCI6Ii86a3Vyb2dvQXBwSWQvOnVzZXJJZC9vcHRJbiIsIm1ldGhvZCI6IlBPU1QifSx7ImVuZHBvaW50IjoiLzprdXJvZ29BcHBJZC86dXNlcklkL29wdE91dCIsIm1ldGhvZCI6IlBPU1QifV0sImlhdCI6MTY0MTgxMDcxMCwibmJmIjoxNjQxODEwNjgwLCJleHAiOjE2NDE4OTcxMTAsImlzcyI6ImJ1ZGR5LWxpc3QiLCJzdWIiOiJidWRkeTY4In0._2PCY98LgjKOwqS8jypLdng88uVaoWPBvDUwUb8ZAmA`

const image = `data:image/jpeg;base64,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`

const options = {
    headers: {
        authorization : authToken,
        'content-type' : 'application/json'
    }
}

const images = [
    "https://picsum.photos/id/117/128",
"https://picsum.photos/id/118/128",
"https://picsum.photos/id/119/128",
"https://picsum.photos/id/12/128",
"https://picsum.photos/id/120/128",
"https://picsum.photos/id/121/128",
"https://picsum.photos/id/122/128",
"https://picsum.photos/id/123/128",
"https://picsum.photos/id/124/128",
"https://picsum.photos/id/125/128",
"https://picsum.photos/id/126/128",
"https://picsum.photos/id/127/128",
"https://picsum.photos/id/128/128",
"https://picsum.photos/id/129/128",
"https://picsum.photos/id/13/128",
"https://picsum.photos/id/130/128",
"https://picsum.photos/id/131/128",
"https://picsum.photos/id/132/128",
"https://picsum.photos/id/133/128",
"https://picsum.photos/id/134/128",
"https://picsum.photos/id/135/128",
"https://picsum.photos/id/136/128",
"https://picsum.photos/id/137/128",
"https://picsum.photos/id/139/128",
"https://picsum.photos/id/14//128",
"https://picsum.photos/id/140/128",
"https://picsum.photos/id/141/128",
"https://picsum.photos/id/142/128",
"https://picsum.photos/id/143/128",
"https://picsum.photos/id/144/128",
"https://picsum.photos/id/145/128",
"https://picsum.photos/id/146/128",
"https://picsum.photos/id/147/128",
"https://picsum.photos/id/149/128",
"https://picsum.photos/id/15/128",
"https://picsum.photos/id/151/128",
"https://picsum.photos/id/152/128",
"https://picsum.photos/id/153/128",
"https://picsum.photos/id/154/128",
"https://picsum.photos/id/155/128",
"https://picsum.photos/id/156/128",
"https://picsum.photos/id/157/128",
"https://picsum.photos/id/158/128",
"https://picsum.photos/id/159/128",
"https://picsum.photos/id/16/128",
"https://picsum.photos/id/160/128",
"https://picsum.photos/id/161/128",
"https://picsum.photos/id/162/128",
"https://picsum.photos/id/163/128",
"https://picsum.photos/id/164/128",
"https://picsum.photos/id/165/128",
"https://picsum.photos/id/166/128",
"https://picsum.photos/id/167/128",
"https://picsum.photos/id/168/128",
"https://picsum.photos/id/169/128",
"https://picsum.photos/id/17/128",
"https://picsum.photos/id/170/128",
"https://picsum.photos/id/171/128",
"https://picsum.photos/id/172/128",
"https://picsum.photos/id/173/128",
"https://picsum.photos/id/174/128",
"https://picsum.photos/id/175/128",
"https://picsum.photos/id/176/128",
"https://picsum.photos/id/177/128",
"https://picsum.photos/id/178/128",
"https://picsum.photos/id/179/128",
"https://picsum.photos/id/18/128",
"https://picsum.photos/id/180/128",
"https://picsum.photos/id/181/128",
"https://picsum.photos/id/182/128",
"https://picsum.photos/id/183/128",
"https://picsum.photos/id/184/128",
"https://picsum.photos/id/185/128",
"https://picsum.photos/id/186/128",
"https://picsum.photos/id/187/128",
"https://picsum.photos/id/188/128",
"https://picsum.photos/id/189/128",
"https://picsum.photos/id/19/128",
"https://picsum.photos/id/190/128",
"https://picsum.photos/id/191/128",
"https://picsum.photos/id/192/128",
"https://picsum.photos/id/193/128",
"https://picsum.photos/id/194/128",
"https://picsum.photos/id/195/128",
"https://picsum.photos/id/196/128",
"https://picsum.photos/id/197/128",
"https://picsum.photos/id/198/128",
"https://picsum.photos/id/199/128",
"https://picsum.photos/id/25/128",
"https://picsum.photos/id/20/128",
"https://picsum.photos/id/200/128",
"https://picsum.photos/id/201/128",
"https://picsum.photos/id/202/128",
"https://picsum.photos/id/203/128",
"https://picsum.photos/id/204/128",
"https://picsum.photos/id/206/128",
"https://picsum.photos/id/208/128",
"https://picsum.photos/id/209/128",
"https://picsum.photos/id/21/128",
"https://picsum.photos/id/210/128"
]


export {
    basePath,
    authToken,
    image,
    options,
    images
}