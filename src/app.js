const { setEngine } = require('crypto');
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 4000;
 



const staticPath = path.join(__dirname,"../public")

const templatePath = path.join(__dirname,"../templates/views")

const partialPath = path.join(__dirname, "../templates/partials")





// To set view engine
app.set("view engine", "hbs");

// Customizing views path
app.set("views",templatePath);

// For using Partials, we have to register Partials folder using hbs module
hbs.registerPartials(partialPath);





// serving static HTML & Css files to app
app.use(express.static(staticPath));





//  Template Engine's routing

app.get("/", (req, res) => {
    res.render('index')
})


app.get("/about", (req, res) => {
    res.render('about')
})


app.get("/weather", (req, res) => {
    res.render('weather')
})


app.get("*", (req, res) => {
    res.render('error', {
        errorMsg : "Oops! Page not found."
    })
})





app.listen(port, () => {
    console.log(`Listening to the port at ${port}`)
})
