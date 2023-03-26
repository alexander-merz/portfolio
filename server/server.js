require('dotenv').config()

const server = require('express')()

const BlogPostRouter = require('./blog-post')

server.use('/blog-post', BlogPostRouter)

server.listen(process.env.PORT)
