import mongoose from 'mongoose';
import { Response, Request } from 'express';
import { ContactSchema } from '../models/crmModel.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req: Request, res: Response): Promise<void> => {
    let newContact = new Contact(req.body);

    try {
        let contact = await newContact.save()
        res.status(201).json(contact)
    } catch (error) {
        res.status(500).send(error)
    }
};

export const getContacts = async (req:Request, res:Response): Promise<void> => {
    try {
        const contact = await Contact.find({})
        res.json(contact);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getContactWithID = async (req: Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.findById(req.params.contactId)
        res.json(contact);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateContact = async (req:Request, res: Response): Promise<void> => {
    try {
        const contact = await Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true})
        res.json(contact);
    } catch (error) {
        res.send(error);
    }
}

export const deleteContact = async (req:Request, res: Response): Promise<void> => {
    try {
        await Contact.deleteOne({_id: req.params.contactId})
        res.json({ message: 'Successfully deleted contact'});
    } catch (error) {
        res.send(error);
    }
}