const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Set static path
app.use(express.static(path.join(__dirname, "client")))

app.use(bodyParser.json())

const publicVapidKey = 'BGbrMIbm45q_9zoXNb3dSLl5-EunTKp8n1O_PMnUmCaJauwmI-DIqzkcFH8CsCCCHE-_vvEaeKXjGAU6URXn8O0'
const privateVapideKey = 'oiH67roLhrXPg8lOc4KcuLX5IvAjrVLtqCaZYbbPTSg'

webpush.setVapidDetails('mailt:test@test.com', publicVapidKey, privateVapideKey)

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body

    // Send 201 - resource created
    res.status(201).json({})

    // Create payload
    const payload = JSON.stringify({ title: 'Push test'})

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err))

})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))