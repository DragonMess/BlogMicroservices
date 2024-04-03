const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
//parse the body to a json
app.use(bodyParser.json())

//object to save temporary the comments
const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
res.send(posts)
})
//
app.post('/posts/:id/comments', (req, res) => {
    //generate a random ID 
    const commentId = randomBytes(4).toString('hex')
    
    const { content } = req.body

    //create an array of comments and verify if there are an id in the req, if not create an empty array.
    const comments  = commentsByPostId[req.params.id] || []

// response status 201 and the post created
    res.status(201).send(posts[id])
})

app.listen(4001, ()=> {
    console.log('Listening on 4001')
} )