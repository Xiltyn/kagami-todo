import * as React from 'react';
import Header from '../header/Header';
import Todo from './Todo';
import '../../assets/scss/components/todo/TodoView';
import AddTodo from "./AddTodo";
import BlobsAnimation from "../global/BlobsAnimation";
import Schema from "../../../data/graphql/schema";
import {
    // These are the basic GraphQL types
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLEnumType,

    // This is used to create required fields and arguments
    GraphQLNonNull,

    // This is the class we need to create the schema
    GraphQLSchema,

    // This function is used execute GraphQL queries
    graphql
} from 'graphql';

const Todos = [
    {
        id: 1,
        content: 'Take out the trash',
        time: 'Tomorrow@8am',
        status: 'todo',
        tags: [
            'home',
            'annoying'
        ],
        categoryId: 1,
        priority: 1
    },
    {
        id: 2,
        content: 'Plan out the week',
        time: 'Today@9am',
        status: 'done',
        tags: [
            'home',
            'jobSearch',
            'mustDo'
        ],
        categoryId: 3,
        priority: 2
    },
    {
        id: 3,
        content: 'Prepare for the interview',
        time: '27 May 2017@10am',
        status: 'inProgress',
        tags: [
            'Job',
            'stressful'
        ],
        categoryId: 2,
        priority: 3
    },
];
const Categories = [
    {
        id: 1,
        category: 'Me'
    },
    {
        id: 2,
        category: 'Job'
    },
    {
        id: 3,
        category: 'Social'
    }
];

export default class TodoView extends React.Component<any, any> {
	protected assignCategory = (categoryId:any) => {
		let result:string = '';

		Categories.forEach(function (cat) {
			if (cat.id == categoryId) {
				result = cat.category;
			}
		})

		return result
	};

	protected returnTags = (tags:any) => {
		let result:string = '';

		tags.forEach(function(tag:any) {
			result += '#' + tag + ' '
		})

		return result;
	};

	render() {
		let color = '#7ED321';

		return(
			<div className="TodoView">
				<Header colorVariant={color} isLoggedIn={true} />
				{Todos.map(
					(todo, index:number) =>
						<Todo
							key={index.toString()}
							content={todo.content}
							time={todo.time}
							tags={this.returnTags(todo.tags)}
							category={this.assignCategory(todo.categoryId)}
							priority={todo.priority}
							status={todo.status}
						/>
				)}
				<AddTodo />
				<BlobsAnimation/>
			</div>
		)
	}
}

let query = `
  {
    receivedMessage: echo(message: "Hello")
  }
`;

graphql(Schema, query).then(function(result) {
    console.log(result);
});