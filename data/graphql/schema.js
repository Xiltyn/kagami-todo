const gql = require('graphql');

const Todos = new gql.GraphQLObjectType({
    name: 'TodosQuery',
    fields: () => ({
        _id: {type: gql.GraphQLString},
        content: {type: gql.GraphQLString},
        time: {type: gql.GraphQLString},
        priorityId: {type: gql.GraphQLInt},
        categoryId: {type: gql.GraphQLInt}
    })
});

const Schema = new gql.GraphQLSchema({
    query: Todos
});


module.exports = Schema;