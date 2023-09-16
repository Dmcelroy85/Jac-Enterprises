const express = require("express");
const router = express.Router();

let team = [
    {
        "id": 1,
        "title": "Junior Full-Stack Developer",
        "photo": "./src/assets/images/derek.png",
        "name": "Derek McElroy",
        "bio": "Hey there, I'm Derek McElroy! Currently, I'm attending We Can Code It's Bootcamp, and I'm super excited about delving deeper into the world of Java Full Stack Development. For the past 5 years, I've been a learning trainer at Amazon, where I've had the opportunity to enhance my skills with various Microsoft tools. One tool that I excel in is Microsoft Excel—I've become quite the pro with it!",
        "link": "http://derek-mcelroy.com",
        "link2": "https://github.com/Dmcelroy85#:~:text=Dmcelroy85.github.io"
    },
    {
        "id": 2,
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
        "link": "https://www.linkedin.com/in/moises-galarza-bb7995217/#:~:text=www.-,linkedin,-.com/in/moises",
        "link2": "https://github.com/Musaf95/musaf95.github.io"
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

// GET: Get all team members
router.get("/", (req, res) => {
    res.status(200).json(team);
});

// POST: Add a new team member
router.post("/", (req, res) => {
    const newTeamMember = req.body; 
    const newId = team.length + 1;
    newTeamMember.id = newId;
    team.push(newTeamMember);
    console.log(`New member added with ID ${newId}`);
    res.status(201).json(newTeamMember); // Return the new team member
});

// PUT: Update an existing team member by ID
router.put("/:id", (req, res) => {
    const memberId = parseInt(req.params.id);
    const updatedMember = req.body; 

    // Find the member by ID
    const existingMember = team.find((member) => member.id === memberId);

    if (!existingMember) {
        res.status(404).json({ message: "Member not found" });
    } else {
        // Update member data
        existingMember.title = updatedMember.title;
        existingMember.photo = updatedMember.photo;
        existingMember.name = updatedMember.name;
        existingMember.bio = updatedMember.bio;
        existingMember.link = updatedMember.link;
        existingMember.link2 = updatedMember.link2;

        console.log(`Member with ID ${memberId} updated`);
        res.status(200).json(existingMember); // Return the updated member
    }
});

// DELETE: Delete a team member by ID
router.delete("/:id", (req, res) => {
    const memberId = parseInt(req.params.id);

    // Find the index of the member by their ID
    const memberIndex = team.findIndex((member) => member.id === memberId);

    if (memberIndex === -1) {
        res.status(404).json({ message: "Member not found" });
    } else {
        // Remove the member from the array
        team.splice(memberIndex, 1);
        console.log(`Member with ID ${memberId} deleted`);
        res.status(204).send(); // Successful response with no content
    }
});

module.exports = router;
