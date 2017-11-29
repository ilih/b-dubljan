const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create project Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nmame is required']
    },
    name_en: {
        type: String,
        required: [true, 'Nmame is required']
    },
    description: {
        type: String,
        required: false
    },
    description_en: {
        type: String,
        required: false
    },
    photos: {
        type: [String],
        required: false
    },
    photos_alt: {
        type: [String],
        required: false
    },
    photos_alt_en: {
        type: [String],
        required: false
    },
    renders: {
        type: [String],
        required: false
    },
    renders_alt: {
        type: [String],
        required: false
    },
    renders_alt_en: {
        type: [String],
        required: false
    },
    plans: {
        type: [String],
        required: false
    },
    plans_alt: {
        type: [String],
        required: false
    },
    plans_alt_en: {
        type: [String],
        required: false
    },
    geometry: JSON
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;