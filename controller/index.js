import Joi from 'joi'
import Person from '../model/person.js'

export const createPerson = async(req, res) => {
  try {
    const { name, email } = req.body
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required()
    })
    const {value, error} = schema.validate(req.body)
    if (error != null) {
      return res.status(400).send({ message: error.message, status: false })
    }
    const data = new Person({
      name, email
    })
    const response = await data.save()
    res.status(200).send({data: response, message: "successful", status: true})
  } catch (error) {
    
  }
}

export const updatePerson = async(req, res) => {
  try {
    const {id} = req.params
    const {name, email} = req.body
    const schema = Joi.object({
      name: Joi.string(),
      email: Joi.string(),
      id: Joi.string().required()
    })
    const {value, error} = schema.validate({...req.body, id})
    if (error != null) {
      return res.status(400).send({ message: error.message, status: false })
    }
    const data = await Person.findById(id)
    if(!data){
      return res.status(404).send({ message: "User not found", status: false })
    }
    data.name = name
    data.email = email
    const response = await data.save();
    res.status(200).send({data: response, message: "successful", status: true})
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getSinglePerson = async (req, res) => {
  try {
    const {id} = req.params
    const schema = Joi.object({
      id: Joi.string().required()
    })
    const {value, error} = schema.validate({id})
    if (error != null) {
      return res.status(400).send({ message: error.message, status: false })
    }
    const data = await Person.findById(id)
    res.status(200).send({data, message: "successful", status: true})
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deletePerson = async(req, res) => {
  try {
    const {id} = req.params
    const data = await Person.findById(id)
    if(!data) {
      return res.status(404).send({message: "user not found", status: false})
    }
    const response = await data.deleteOne()
    res.status(200).send({data: response, message: "successful", status: true})
  } catch (error) {
    res.status(500).send(error.message)
  }
}

