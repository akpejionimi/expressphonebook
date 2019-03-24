const db = require("../utils/database");

class Contact {
    constructor(name,phone,email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    save() {
        return db.execute(
            "INSERT INTO contact (name,phone,email) VALUES (?,?,?)",
            [this.name, this.phone, this.email]);
        
    }

    static getAll() {
        return db.execute("SELECT * FROM contact");
    }

    static getById(id) {
        return db.execute("SELECT * FROM contact WHERE id=?", [id])
    }

    static deletebyId(id) {
        return db.execute("DELETE FROM contact WHERE id=?", [id])
    }

    static editbyId(name,phone,email,id) {
        return db.execute("UPDATE contact SET name =?,phone=?,email=? WHERE id=?",[name,phone,email,id] )
    }


}

module.exports = Contact;