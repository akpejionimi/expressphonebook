const express = require("express");
// const fs = require('fs');
const router = express.Router();
// const path = require("path");

const contactController = require ("../controller/contact");

// const contacts = [];

router.get("/add", contactController.getContact)

router.post("/create",contactController.postContact);
router.post("/edit/:id",contactController.updateContact);
router.get("/edit/:id",contactController.editContact);
router.get("/delete/:id",contactController.deleteContact);

module.exports = {
    router
    // contacts
}








// router.get("/add", (req, res, next) => {
//     res.render("add", { pageTitle: "Add contact" });
        // res.send(`
        //     <form action="/create" method="POST">
        //         <label for="Name">
        //             Name:
        //             <input type="text" id="name" name="name">
        //         </label>
    
        //         <label for="Name">
        //             Phone No.:
        //             <input type="number" id="phone" name="phone">
        //         </label>
        
        //         <label for="Name">
        //             Email:
        //             <input type="email" id="name" name="email">
        //         </label>
        
        //         <input type="submit" value="Save" />
        //     </form>
        // `);
        // });
        // router.post("/create", (req, res, next) => {
            //     contacts.push({name: req.body.name},{phone: req.body.phone},{email: req.body.email});
            //     contacts.push({phone: req.body.name});
            //     contacts.push({phone: req.body.phone});
            //     contacts.push({email: req.body.email});
            //     res.redirect("/");


            //     details ="\n" + req.body.name;
        //     fs.appendFile("details.txt", details, (err) => {
            //         if (!err) {
                //             console.log("Done Writing");
                //             res.redirect("/");
        //         }
        //     })
        //     console.log(req.body.name,req.body.phone,req.body.email);
        //     console.log(req.body.phone);
        //     console.log(req.body.email);
        //     res.send("<h1>Successfully Created</h1>");
        
        // })
        
        // module.exports = router;