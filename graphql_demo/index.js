const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());

const {graphqlHTTP}=require('express-graphql');
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
 } = require('graphql');

 const authors=[
    {id:1,name:"Author1"},
    {id:2,name:"Author2"},
    {id:3,name:"Author3"},
    {id:4,name:"Author4"}

 ];

 const books=[
    {id:1,name:"Könyv1",authorid:1},
    {id:2,name:"Könyv2",authorid:1},
    {id:3,name:"Könyv3",authorid:2},
    {id:4,name:"Könyv4",authorid:3}
 ];



//  const schema=new GraphQLSchema({
//     query:new GraphQLObjectType({
//         name:"Zuuuu",
//         fields:()=>({
//             message:{
//                 type: GraphQLString,
//                 resolve:()=>"Zuuuu"
                
//             }
//         })
//     })
//  });

const BookType=new GraphQLObjectType ({
    name:'Book',
    description:'A book',
    fields:()=>({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: {type: new GraphQLNonNull(GraphQLString)},
        authorid: { type: new GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve:(book)=>{
                return authors.find(author=>author.id===book.authorid)
            }
        }
    })


});

const AuthorType=new GraphQLObjectType ({
    name:'Author',
    description:'The author of the book',
    fields:()=>({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: {type: new GraphQLNonNull(GraphQLString)},
        books:{
             type: new GraphQLList(BookType),
             resolve:(author)=>{
                return books.filter(book=>book.authorid===author.id)
             }
         }
       
    })



});

const RootQueryType=new GraphQLObjectType({
    name:'Query',
    description:'Root query',
    fields:()=>({
        book:{
            type:BookType,
            description:'A single book',
            args:{
                id: {type: GraphQLInt}
            },
            resolve:(parent,args)=>books.find(book=>book.id===args.id)
        },
        author:{
            type:AuthorType,
            description:'A single author',
            args:{
                id: {type: GraphQLInt}
            },
            resolve:(parent,args)=>authors.find(author=>author.id===args.id)
        },
        books:{
            type:new GraphQLList(BookType),
            description:'List of books',
            resolve:()=>books
        },
        authors:{
            type:new GraphQLList(AuthorType),
            description:'List of Authors',
            resolve:()=>authors
        }
        
    })

});

const RootMutationType=new GraphQLObjectType({
    name:'Rootmutation',
    description:'Root mutation',
    fields:()=>({
        addBook:{
            type:BookType,
            description:"Add a book",
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                authorid:{type: new GraphQLNonNull(GraphQLInt)},

            },
            resolve:(parent, args)=>{
                const book={
                    id:books.length+1,
                    name:args.name,
                    authorid:args.authorid
                }
                books.push(book);
                return book
            }
        }
    })
});

const schema=new GraphQLSchema({
    query:RootQueryType,
    mutation:RootMutationType
})

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema
}));

app.listen(8000,()=>{console.log('Running')});