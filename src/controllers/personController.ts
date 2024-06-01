import { Request, Response } from 'express';
import Person from '../models/Person';

export const getAllPersons = async (req: Request, res: Response) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPersonById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const person = await Person.findByPk(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).send('Persona no encontrada');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createPerson = async (req: Request, res: Response) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updatePerson = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const [updated] = await Person.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedPerson = await Person.findByPk(id);
      res.json(updatedPerson);
    } else {
      res.status(404).send('Persona no encontrada');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deletePerson = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await Person.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Persona no encontrada');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
