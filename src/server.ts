import { fastify } from "fastify";

const app = fastify()

app.get('/unipar', ()=> {
    return 'Olá Fastify!'
} ) 

app.listen({ port: 3333 }).then( ()=> {
    console.log('SERVIDOR RODANDO')
})


