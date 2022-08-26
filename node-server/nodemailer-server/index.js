let express = require("express");
let http = require("http");
let path = require("path");
let nodemailer = require("nodemailer");

let app = express();
let server = http.Server(app);
let port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "static")));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://116.62.152.170/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routing
app.post("/send-email", function (req, response) {
    let from = "907785012@qq.com";
    let to = "907785012@qq.com";
    let subject = req.body.subject;

    let userContact = req.body.email;
    let username = req.body.name;

    let message = "from " + username + "(email: " + userContact + "): \n" + req.body.message;

    let transporter = nodemailer.createTransport({
        service: 'qq',
        host: 'smtp.qq.email',
        port: 465,
        secure: true,
        auth: {
            user: '907785012@qq.com',
            pass: 'xewrzqwylittbcdc'
        }
    });

    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.info(error);
        } else {
            console.info("Email Sent: " + info.response);

            // 发送成功，返回首页
            response.send("发送成功，感谢您的反馈，我们会尽快回复。<a href='http://116.62.152.170/'>回到主页</a>");
        }
    })
})

server.listen(port, function () {
    console.log("Start server on port: " + port);
})