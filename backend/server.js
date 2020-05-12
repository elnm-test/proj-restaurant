const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const path = require('path');


var mealRoutes = require('./api/meals/meals.routes');
var dateRoutes = require('./api/dates/dates.routes');
var tablesModelRoutes = require('./api/tables/tables.routes')
var userRoutes = require('./api/users/users.routes');
var authRoutes = require('./api/auth/auth.routes')

app.use(cookieParser())
app.use(bodyParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
    }
}))

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}


app.use('/api/meals', mealRoutes)
app.use('/api/dates', dateRoutes)
app.use('/api/tables', tablesModelRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

const PORT = process.env.PORT || 3000
http.listen(PORT, () => {
    console.log('Server Build', PORT)
})