// Router will 'use' assignments
import {Request, Response, Router} from 'express'
let db = require('../models')
import {IClass} from '../models/class'

const router = Router()

//router.use('/:classname/assignments', require('./assignments'))

// POST a new class
router.post('/', (req:Request, res:Response) => {
    db.Class.create(req.body)
    .then((c:IClass) => {
        res.send(c)
    })
    .catch((err:Error) => {
        console.log("Error:",err)
    })
})

// GET a class by ID
router.get('/:id', (req:Request, res:Response) => {
    db.Class.findOne({_id:req.params.id})
    .then((c:IClass) => {
        res.send(c)
    })
    .catch((err:Error) => {
        console.log("Error:",err)
    })
})

// PUT updated info into a class by ID
router.put('/:id', (req:Request, res:Response) => {
    db.Class.findOneAndUpdate({_id:req.params.id}, req.body)
})

// GET all classes for a specified student
router.get('/student/:id', (req:Request, res:Response) => {
    
})

// GET all classes for a specified teacher
router.get('/teacher/:id', (req:Request, res:Response) => {

})

module.exports = router