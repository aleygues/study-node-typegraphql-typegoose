import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { WildersResolver } from './resolvers/Wilders';
import mongoose from 'mongoose';

const initialize = async () => {
    console.log('Connecting mongodb...');
    await mongoose
        .connect('mongodb://127.0.0.1:27017/wilderdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoIndex: true,
        });

    const schema = await buildSchema({ resolvers: [WildersResolver] });
    const server = new ApolloServer({ schema });
    await server.listen(4300);
    console.log('Server has started!');
};

initialize();
