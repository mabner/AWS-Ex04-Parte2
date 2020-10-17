var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
input MessageInput {
  content: String
  author: String
}

type Message {
  id: ID!
  content: String
  author: String
}

type Query {
  getMessage(id: ID!): Message
}

type Mutation {
  createMessage(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}
`);

// This class implements the RandomDie GraphQL type
class RandomDie {
	constructor(numSides) {
		this.numSides = numSides;
	}

	rollOnce() {
		return 1 + Math.floor(Math.random() * this.numSides);
	}

	roll({ numRolls }) {
		var output = [];
		for (var i = 0; i < numRolls; i++) {
			output.push(this.rollOnce());
		}
		return output;
	}
}

// The root provides the top-level API endpoints
var fakeDatabase = {};
var root = {
	setMessage: ({ message }) => {
		fakeDatabase.message = message;
		return message;
	},
	getMessage: () => {
		return fakeDatabase.message;
	},
};

var app = express();
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
