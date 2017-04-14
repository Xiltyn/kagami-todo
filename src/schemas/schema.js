import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

const Query = new GraphQLObjectType({
    name: 'RootQueries',
    fields: () => ({
        echo: {
            type: GraphQLString,
            args: {
                message: {type: GraphQLString}
            },
            resolve(rootValue, args) {
                return `received: ${args.message}`;
            }
        }
    })
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;