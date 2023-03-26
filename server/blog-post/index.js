const BlogPostRouter = require('express').Router()

BlogPostRouter.get('/', (_, res) => {
  res.send('All Blog Posts')
})

BlogPostRouter.get('/:id', (req, res) => {
  res.send(req.params.id)
})

module.exports = BlogPostRouter
