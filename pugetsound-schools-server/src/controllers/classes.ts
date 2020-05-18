// Router will 'use' assignments
let router = require('express').Router()

router.use('/:classname/assignments', require('./assignments'))

// POST a new class
router.post('/', (req,res) => {

})

// GET a class by ID
router.get('/:id', (req,res) => {

})

// PUT updated info into a class by ID
router.put('/:id', (req,res) => {

})

// GET all classes for a specified student
router.get('/student/:id', (req,res) => {
    
})

// GET all classes for a specified teacher
router.get('/teacher/:id', (req,res) => {

})