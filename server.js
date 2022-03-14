const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const hbs = handlebars.create();
const routes = require('./routes');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(PORT, () =>{
    console.log("Listening on: http://localhost:"+PORT);
});
