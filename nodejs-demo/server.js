const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/workouts', function (req, res) {
    res.json([{
        "id": 1,
        "title": "Swimming",
        "description": "Good for health",
        "cbpm": 0,
        "port": null,
        "category": null
      },
      {
        "id": 2,
        "title": "Running",
        "description": "Good for health",
        "cbpm": 0,
        "port": null,
        "category": null
      },
      {
        "id": 52,
        "title": "Running",
        "description": "Good for health",
        "cbpm": 4,
        "port": null,
        "category": {
          "id": 1,
          "title": "Cardio"
        }}])
  })

app.listen(3000)