const Phone = require("../models/phoneShema")

//adding new Phone
const createPhone = async (req,res) => {
    const newPhone = new Phone({
        band: req.body.name,
        model: req.body.model,
        max_speed: req.body.speed,
        price: req.body.price
    });

    await newPhone.save()
    res.status(201).json(newPhone);
}
//get all Phones
const getAllPhones = async (req,res) => {
    const phones = await Phone.find()
    res.json(Phones)
}
//get a trainee
const getSinglePhone = async (req,res) => {
    const phone = await Phone.findById(req.params._id)
    res.json(phone)
}
//update a Phone
const updatePhone =async (req, res) =>{
    const foundPhone = await Phone.findById(req.params._id)
    if (foundPhone) {
        (foundPhone.brand = req.body.name),
        (foundPhone.max_speed = req.body.max_speed),
        (foundPhone.price = req.body.price),
        (foundPhone.ASW = req.body.ASW)
        
        const updatedPhone = await foundPhone.save()
        res.json({updatedPhone})
    }
}

// delete a Phone
const deletePhone = async (req,res) => {
    const foundPhone = await Phone.findById(req.params._id)
    if (foundPhone) {
        foundPhone.remove()
        res.json((`msg: ${foundPhone.name} removed`))
    } else {
        res.status(404).json({error: "Phone not found"})
    }
}

module.exports = {createPhone, getAllPhones, getSinglePhone, updatePhone, deletePhone };