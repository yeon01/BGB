import { Connection } from 'tedious';
import { Request } from 'tedious';

var config = {
    server: '접속할 서버 아이피',
    options: { encrypt:false, database: '서버명' },
    authentication:{
        type:"default",
        options:{
            userName:"아이디",
            password:"비밀번호"
        }
    }
};

var sqlConn = new Connection(config);
sqlConn.on('connect', function(err) {
    console.log("Connected");
    executeStatement();
});

function executeStatement() {
    request = new Request("select Convert(char(10),getdate(),121) as TargetDate, newid()", function(err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log(column.value);
        });
    });

    sqlConn.execSql(request);
}











// 
const express = require('express')
const morgan = require('morgan')
// const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
// Config dotev
// require('dotenv').config({
//     path: './config/config.env'
// })


const app = express()

// Connect to database
// connectDB();

// body parser
app.use(bodyParser.json())
// Load routes
// const authRouter = require('./routes/auth.route')
// const userRouter = require('./routes/user.route')

// Dev Logginf Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

// Use Routes
// app.use('/api', authRouter)
// app.use('/api', userRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});