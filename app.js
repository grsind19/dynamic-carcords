const express = require('express')

const app = express();

const coords = [
  {
    "name":"Car1",
    "direction":"forward",
    "ccords": [100,100],
    "vin":"TN 49, AZ 2345",
    "driver_contact":"9043007394",
  }
]

app.get('/getdata',(rer,res)=>{
  coords[0]['ccords'] = [coords[0]['ccords'][0]+25,coords[0]['ccords'][1]+25]
  res.status(200).send(coords)
})

app.listen(3000,()=>{
  console.log("server started")
})