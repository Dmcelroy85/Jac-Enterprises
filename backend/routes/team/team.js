const express = require("express");
const router = express.Router();
let team = [{
        "id": 1,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/derek.png",
        "name": "Derek McElroy",
        "bio": "Hey there, I'm Derek McElroy! Currently, I'm attending We Can Code It's Bootcamp, and I'm super excited about delving deeper into the world of Java Full Stack Development. For the past 5 years, I've been a learning trainer at Amazon, where I've had the opportunity to enhance my skills with various Microsoft tools. One tool that I excel in is Microsoft Excel—I've become quite the pro with it!",
        "link": "http://derek-mcelroy.com",
        "link2": "#"
    },
    {
        "id": 5,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/jacob.png",
        "name": "Jacob Carrol",
        "bio": "This is the bio section for Jacob",
        "link": "#",
        "link2": "#"
    },
    {
        "id": 3,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/umesh.png",
        "name": "Umesh Shrestha",
        "bio": "Hello, I'm Umesh Shrestha, from Reynoldsburg, Ohio USA. I'm a currently learning front-end developing at We Can Code It. My goal is to develop many types of front-ends for well known DJ applications to Ecommerce booking platforms.",
        "link": "#",
        "link2": "#"
    },
    {
        "id": 4,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/moises.png",
        "name": "Moises Galarza",
        "bio": "I'm Moises Galarza. I come from Ecuador, I come to the United States in 2013. I'm an automated logistical specialist in the U.S. Army Reserve. I graduated from the College of Staten Island (CSI) in New York. I have a two bachelor’s degree, one in Communication Design & Digital Media, and one in Spanish, also one minor in Linguistics. I currently work in Amazon (JFK8) since 2021, I’m a stower and I do Amnesty (Amazon Robotics).",
        "link": "#",
        "link2": "#"
    },
    {
        "id": 5,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/chris.png",
        "name": "Chris Braid",
        "bio": "I graduated with dual associate degrees in Information Technology (Computer Networking Hardware & Software.) After graduating, I spent a few years as a stay-at-home parent. In 2021 I obtained my CompTIA A+ certification and one year later landed my first IT position. I am presently employed by Amazon. I am an IT equipment coordinator within the OpsTech Solutions department",
        "link": "https://burningxbeard.github.io/",
        "link2": "#"
    }
];

router.get("/all", (req, res) => {
    res.status(200).json(team);
});

router.get("/:id", (req, res) => {
    if (team[req.params.id]) {
        return res.status(200).json(team[req.params.id]);
    }
    return res.status(404).json({
        error: "User not Found!",
    })
});

router.post("/new", (req, res) => {
    let newTeam = {
        id : req.body.id,
        title : req.body.title,
        photo : req.body.photo,
        name : req.body.name,
        bio : req.body.bio,
        link : req.body.link,
        link2 : req.body.link2
    };
    team.push(newTeam);
    res.status(201).json({
        message: "Member Created!",
    });
});

router.delete("/:id", (req, res) => {
    if (team[req.params.id]) {
        team.splice(req.params.id, 1);
        return res.status(200).json({
            "message": "Member Deleted!"
        });
    }
    return res.status(404).json({
        error: "Member not Found!",
    })
});

module.exports = router;