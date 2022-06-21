import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5qeac0q3l01xmdun38i13/master',
    cache: new InMemoryCache()
})