const express=require('express')
const app=express()
// const ourrouter=require('.\routes')
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
// const port=2222
const session=require('express-session')

app.set('view engine','ejs')
app.use(session({
     secret:'email',
     resave:true,
     saveUninitialized:true
   }))

   app.use(session({
     secret:'name',
     resave:true,
     saveUninitialized:true
   }))

   app.use(session({
    secret:'name',
    resave:true,
    saveUninitialized:true
  }))

app.use('/public',express.static(__dirname+"/public"))
// app.use('/',ourrouter)




// const express =  require('express');
const path    =  require('path');
const bodyParser = require('body-parser');
// const session = require('express-session');


app.set('view engine', 'ejs');
app.set('views', 'views');

// //own module
// const userRouter = require('./routes/user');
// const adminRouter = require('./routes/admin');

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: false
    })
  );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(userRouter);
app.use("/admin" ,adminRouter);
app.use('/changepassword',userRouter);


app.listen(3000, () => console.log("Server is Running... port 3000"));