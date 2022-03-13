const router = require('express').Router();
const {User, Article, Comment} = require('../../models');
const session = require('express-session');

router.get('/', (res, req) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then((userData) => res.JSON(userData))
    .catch((err) =>{
        console.log(err);
        res.status(500).JSON(err);
    });
});

router.get('/:id', (res, req) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where:{
            id: req.params.id
        },
        include: [
            {
                model: Article,
                attributes: ['id', 'title', 'content', 'created']
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'articleId', 'userId']
            }
        ]
    })
    .then((userData) => res.JSON(userData))
    .catch((err) =>{
        console.log(err);
        res.status(500).JSON(err);
    });
});