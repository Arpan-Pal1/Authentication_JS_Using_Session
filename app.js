import  express  from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
  }))




// Home page router 
import {indexRouter} from './src/router/index.route.js'
app.use('/', indexRouter)

// sign up router
import  userRoute  from './src/router/user.router.js'

app.use('/api/v1/user', userRoute)

export { app}