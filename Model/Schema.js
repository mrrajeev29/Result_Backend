const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = new mongoose.Schema({
    Name: { type: String, required: true },
    id: { type: Number, required: true, unique: true }, // Added unique constraint
    Status: { type: String, required: true },
    Subject: { 
        type: [String], 
        default: ['Math', 'Science', 'Social Science', 'Hindi', 'English'] 
    },
    marks: { type: [Number], required: true }, // Marks must always be provided
    total: { type: Number, required: true }
});

const User = mongoose.model("User", Schema); // Use "User" as the model name

const validate = (data) => {
    const schema = Joi.object({
        id: Joi.number().integer().required().label("Id"),
        Name: Joi.string().required().label("Name"),
        Status: Joi.string().required().label("Status"),
        total: Joi.number().integer().required().label("Total"),
        Subject: Joi.array()
            .items(Joi.string())
            .default(['Math', 'Science', 'Social Science', 'Hindi', 'English']),
        marks: Joi.array().items(Joi.number().required()).label("Marks")
    });
    return schema.validate(data);
};

module.exports = { User, validate };
