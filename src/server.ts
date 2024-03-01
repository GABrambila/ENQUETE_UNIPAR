import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";
import {z} from 'zod'

const app = fastify()
const prisma = new PrismaClient();

app.post('/criarEnquete', async (request)=>{

    const requestBody = z. object(
        {
            titulo : z.string(),
            descricao : z.string(), 
            
        }
    )
    const enquete = requestBody.parse(request.body)

   const enqueteCriada = await  prisma.enquete.create({
        data: enquete
    })

    return "Criado";

    
})

app.listen({ port: 3333 }).then( ()=> {
    console.log('SERVIDOR RODANDO')
})

