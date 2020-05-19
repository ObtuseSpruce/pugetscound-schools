import {Request, Response, Router} from 'express'
let db = require('../models')
import {IAssignment} from '../models/assignment'

//let router = require('express').Router()
const router = Router()

// POST a new assignemtn to a class
router.post('/class/:classId', (req:Request, res:Response) => {

})
// GET all assignments for a class
router.get('/class/:classId', (req:Request, res:Response) => {

})
// GET all assignments for a student
router.get('/student/:studentId', (req:Request, res:Response) => {

})
// GET an assignment by id
router.post('/:id', (req:Request, res:Response) => {

})

module.exports = router