# Learning JavaScript and React and GraphQL

# GraphQL

## Basics

GraphQL is a query language that is used to define API.
It abstracts the client from the server and vice versa.
GraphQL helps customize the types of data that can be requested by the client.

4 main parts of graphQL:

- Schema
- Query
- Resolvers
- Mutations

### Schema

It is the blueprint or contract of the API.
It is written in a specific format called SDL (Schema Definition Language).
It strictly defines every piece of data the client is allowed to read or write.

A `type` defines the structure of an object you can query. Each property of a type is called a **field**.

```jsx
type User {
id: ID!
name: String!
email: String!
posts: [Post]
}
```

```jsx
type Post {
id: ID!
title: String!
content: String!
author: User!
}
```

ID, String, Int etc - Scalar Types
! - required

### Query

A query defines all the read operations. (READ and FETCH)
It lists every type of request a client can make to fetch data.

```jsx
type Query {
post(id: ID!) : Post
allPosts: [post]!
}
```

post  - name of the field
: Post -  defines the return type to be the object Post (implies that if the client query is correct it will return a single object of type Post)
(id: ID!) - arguments the field accepts. Here, the field requires a non nullable (!) argument named id and is of the type ID

General Form: 

```jsx

fieldName(arguments): ReturnType
```

### Mutations

A mutation defines all the write operations (CREATE, UPDATE, and DELETE).

```jsx

type Mutation {
createPost(title: String!, content: String!): Post!
}
```

The `: Post!` return type is the data that the server sends **back to the client** after the mutation is successfully completed.

If a GraphQL operation fails for a reason like a validation error or a database issue, the server will almost always still respond with a **`200 OK`** HTTP status. The error information is included inside the JSON response body.
A failed GraphQL response will contain a top-level **`errors`** array. The corresponding field in the `data` object will typically be `null`.

```jsx
{
"errors": [
	{
		"message": "You are not authorized to perform this action.",
		"locations": [ { "line": 2, "column": 3 } ],
		"path": [ "createPost" ]
	}
],
"data": {
		"createPost": null
	}
}
```

This method allows some parts of your query to succeed while others fail, giving you a partial success response instead of the entire request failing.

### Resolvers

A **resolver** is simply a **function that resolves a field's value** in a GraphQL operation — whether it’s a **query** (read), **mutation** (write), or **subscription** (real-time updates).
 When a query comes in, the GraphQL engine calls the corresponding resolver for each requested field, which then connects to a database, calls another API, or performs any necessary computation to produce the final result.

- Each field in your schema usually has a corresponding resolver.
- Resolvers receive `(parent, args, context, info)` as parameters.
- They can be async —  for database/API calls.
- You can compose resolvers (one resolver calls another (nesting)).
- Default resolvers exist for simple scalar fields (no custom function needed).

| Argument | Meaning |
| --- | --- |
| `parent` / `payload` | The data returned from the previous resolver (or the event payload for subscriptions). |
| `args` | The arguments the client passed to the field in the query/subscription. |
| `context` | Shared object for all resolvers in a request (auth info, db connections, etc.). |
| `info` | Information about the execution state (field name, schema details, etc.) — rarely used for beginners. |

```jsx
type Query {
post(id: ID!): Post
}
type Mutation {
createPost(title: String!): Post
}
```

```jsx
const resolvers = {
Query: {
	post: (parent, { id }) => {
		console.log("Fetching a post...");
		return db.posts.find(p => [p.id](http://p.id/) === id);
		}
	},
Mutation: {
	createPost: (parent, { title }) => {
		console.log("Creating a new post...");
		const newPost = { id: Date.now(), title };
		db.posts.push(newPost);
		return newPost;
		}
	}
};
```

### Subscriptions

**Subscriptions** enable **real-time communication** between the server and clients over WebSockets. Instead of repeatedly polling for updates, the client subscribes to an event, and the server pushes data whenever that event happens (e.g., new chat message, stock price update).

General Form:

```jsx
Subscription: {
  someField: {
    subscribe: () => { ... }
    resolve: () => { ... }
  }
}
```

- Uses `Subscription` type in schema (similar to `Query` and `Mutation`).
- Requires WebSocket support on the server.
- Typically uses `pubsub.asyncIterator` to emit events. (**AsyncIterator** — an object that can continuously push new values over time.)
- Ideal for chat apps, live dashboards, notifications.
- Client listens with `useSubscription` (Apollo Client) or similar hooks.
- **`resolve`**: Runs **every time a new event is published** and lets you:
    - Filter which subscribers get the event.
    - Transform or enrich the payload before sending.

```jsx
type Message {
  id: ID!
  text: String!
  user: String!
}
type Query {
  messages: [Message!]!
}
type Mutation {
  addMessage(text: String!, user: String!): Message!
}
type Subscription {
  messageAdded: Message!
}
```

```jsx
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
const MESSAGE_ADDED = "MESSAGE_ADDED";

let messages = [];

export const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    addMessage: (parent, { text, user }) => {
      const newMessage = { id: Date.now().toString(), text, user };
      messages.push(newMessage);
      pubsub.publish(MESSAGE_ADDED, { messageAdded: newMessage });
      return newMessage;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator(MESSAGE_ADDED),
      resolve: (payload, args, context, info) => {
	      return payload.messageAdded
      }
    },
  },
};
```

- **PubSub** is used to create an event channel.
- `pubsub.publish()` is called inside the mutation — this triggers the event.
- The subscription resolver uses `pubsub.asyncIterator(MESSAGE_ADDED)` to keep listening for new events.
- Any client subscribed to `messageAdded` will immediately receive the new message when `addMessage` runs.
- `subscribe` is the function GraphQL will call **when a client starts listening** to the `messageAdded` subscription.
- In a **subscription**, `payload` is the object you pass to `pubsub.publish()`
- `MESSAGE_ADDED` is the event name/topic.

Client subscribes using: (In the Frontend using Apollo client)

```jsx
subscription {
  messageAdded {
    text
    user
  }
}
```
