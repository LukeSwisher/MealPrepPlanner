const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const users = require('./data').userDB;
const fs = require("fs");

const app = express();
const server = http.createServer(app);

var currentUser = "";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

//Reference https://medium.com/swlh/basic-login-system-with-node-js-99acf02275b9 A lot of code inspiration was used from here, but most of it was changed to work with our system
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//Register a new user
app.post('/register', async (req, res) => 
{
    try 
    {
        let foundUser = users.find((data) => req.body.email === data.email);
        if (!foundUser) 
        {

            let hashPassword = await bcrypt.hash(req.body.password, 10); //Encrypt user password

            //creating newUser
            let newUser = 
            {
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
            };

            //push the newly created user into the our database.
            users.push(newUser);
            console.log('User list', users);

            //write new user to users.txt
            fs.writeFile("./users.txt", JSON.stringify(users), (err) => 
            {
                if (err) {
                    console.error(err);
                    return;
                }
            })

            currentUser = req.body.email;

            //write current user to currentUser.js
            fs.writeFile("./public/currentUser.js", "var currentUser = " + '"' + currentUser + '"' + ";", (err) => 
            {
                if (err) {
                    console.error(err);
                    return;
                }
            })

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./home.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } 
        else 
        {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } 
    catch 
    {
        res.send("Internal server error");
    }
});

//Login an existing user
app.post('/login', async (req, res) => 
{
    try 
    {
        let foundUser = users.find((data) => req.body.email === data.email);
        if (foundUser) 
        {

            let submittedPass = req.body.password;
            let storedPass = foundUser.password;

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);

            currentUser = req.body.email;

            //write current user to currentUser.js
            fs.writeFile("./public/currentUser.js", "var currentUser = " + '"' + currentUser + '"' + ";", (err) => 
            {
                if (err) 
                {
                    console.error(err);
                    return;
                }
            });

            //send user to home page
            if (passwordMatch) 
            {
                let usrname = foundUser.username;
                res.redirect('/Home.html');
            } 
            else 
            {
                //bring up error message for invalid login
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
        }
        else 
        {
            //encryption
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);

            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } 
    catch 
    {
        res.send("Internal server error");
    }
});


server.listen(3000, function () {
    console.log("server is listening on port: 3000");
});