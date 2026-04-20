"start": "node app.js"
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.static('dist'));