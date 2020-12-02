"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Adi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Cidi" },
    { id: 4, name: "Didi" }
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({
            id: id,
            name: name
        });
        return res.json({ message: "Create data success" });
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        if (person) {
            return res.json({ message: "Data found", data: person });
        }
        return res.json({ message: "Data not found" });
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        if (person) {
            person.name = name;
            return res.json({ message: "Data Updated", data: person });
        }
        return res.json({ message: "Data not found" });
    }
    delete(req, res) {
        const { id } = req.params;
        let people = data.filter(item => item.id != id);
        return res.json({ message: "Data found", data: people });
    }
}
exports.default = new UserController();
