const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

Article.belongsTo(User,{
    foreignKey: 'userId'
})

Comment.belongsTo(User,{
    foreignKey: 'userId'
})

Comment.belongsTo(Article,{
    foreignKey: 'articleId'
})

Article.hasMany(Comment,{
    foreignKey: 'articleId',
    onDelete: 'CASCADE'
})

User.hasMany(Article,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

User.hasMany(Comment,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = {User, Article, Comment};