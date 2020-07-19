const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {checkUser} = require('./models/users/usersSQLquery');
const path = require('path');


require('dotenv').config();


const app = express();

app.use(cors({
        credentials: true,
        origin: [
            'http://localhost:3000'            
        ]
    }));

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');  
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.use('/auth/get/', require('./routes/api/auth/GETApi'));
app.use('/auth/post/', require('./routes/api/auth/POSTApi'));


if (process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));

  app.get('*', (req, res)=>{
    res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//page not found with 404
app.use((req, res, next)=>{
	var err = new Error('Page not Found');
	err.status = 404;
	next(err)
});

//handling errors
app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.send(err.message);
})


const port = process.env.PORT || process.env.APP_PORT;

app.listen(port, ()=>console.log('server stared at port ' + port ));