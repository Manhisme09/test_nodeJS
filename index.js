const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json(
      [
          {
              name:"Manh",
              age:19,
              address:"HaNoi"
          },
          {
            name:"Hoang",
            age:1,
            address:"HCM"
        }

      ]
  )
})
app.post("/",(req,res)=>{
    res.send("Method POST")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})