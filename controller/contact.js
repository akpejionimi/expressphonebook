const Contact = require("../models/contact");
// const {contacts} = require ("../routes/add")

exports.getContact = (req, res, next) => {
    res.render("add",
     { pageTitle: "contact", 
     path: req.path });
}

exports.postContact = (req,res, next) => {
    console.log(req.body);
    const contact = new Contact(req.body.name, req.body.phone, req.body.email);
    contact.save()
        .then(() => {
            res.redirect("/");
    })
    .catch(err => next(err));
}

exports.gethomeContact = (req,res,next) =>{
    Contact.getAll()
    .then((result) => {
        res.render("home",
         { pageTitle: "Contact",
          allContacts: result[0],
          path: req.path
    });
    })
    .catch(err => next(err));
}

exports.editPhone = (req, res, next) => {
    const contactId = req.params.id;
    Contacts.getById(contactId)
        .then(([rows, fields]) => {
            res.render("edit_phonebook", 
            {pageTitle: "Edit Phonebook", 
            path: req.path, details: rows[0]});
        })
        .catch(err => next(err));

}
exports.deletebyId = (req, res, next) => {
    const contactId = req.params.id;
    Contacts.deletebyId(contactId)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => next(err));
} 