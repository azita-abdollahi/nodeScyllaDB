const Book = require('../models/book.model');
const { uuidFromString } = require('express-cassandra');
const _ = require('lodash')
require('dotenv').config();

exports.createBook = async (req, res, next) => {
    try {
        let book = new Book({
          author: req.body.author,
          title: req.body.title,
          description: req.body.description,
          publishDate: req.body.publishDate,
          edition: req.body.edition
        });
    
        await book.save();
        res.status(200).json(
            {
                status: 'success',
                data: {
                    book,
                }
            }
        );
      } catch (err) {
        res.status(400).json({ message: 'invalid input'})
        next(err)
      }
}

exports.getBook = async (req, res, next) => {
    try {
        const id =  uuidFromString(req.body.id)
        const book = await Book.findOneAsync({id : id}, { allow_filtering: true });
        if (!book) {
          throw new Error('Book not found')
        }
        res.status(200).json({
            status: 'success',
            data: {
                book,
            }
        })
      } catch (err) {
        console.error(err)
        next(err);
      }
}

exports.updateBook = async (req, res, next) => {
    try {
        const id =  uuidFromString(req.body.id)
        const query_object = {id: id};
        var update_values_object = _.omit(req.body, ['id']);
        var options = {ttl: 86400, if_exists: true};
        const book = await Book.updateAsync(query_object, update_values_object, options)
        res.status(200).json({
            status: 'success',
            data: {
                book,
            }
        })

    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const id =  uuidFromString(req.body.id)
        const book = await Book.deleteAsync({id : id})
        res.status(200).json({
            status: 'success',
            data: {
                book,
            }
        })
     } catch (err) {
        next(err);
     } 
}

// dont forget add error for !book 
