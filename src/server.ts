import { fastify } from "fastify";
import {z} from 'zod'

const app = fastify()

app.get('/unipar', ()=> {
    return 'Olá Fastify!'
} ) 

app.post('/uniparpost', (request)=>{

    const requestBody = z. object(
        {
            nome : z.string().optional(),
            sobrenome : z.string(), 
            idade : z.number(), 
        }
    )
    const pessoa = requestBody.parse(request.body)

    return pessoa

    
})

app.listen({ port: 3333 }).then( ()=> {
    console.log('SERVIDOR RODANDO')
})

