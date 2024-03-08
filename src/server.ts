import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";
import { z } from "zod";

const app = fastify()
const prisma = new PrismaClient();

/*app.get('/unipar', () => {
    return 'Ola FASTIFY'
})*/

app.post('/criarEnquete', async (request) => {

    const requestBody = z.object(
        {
            titulo: z.string(),
            descricao: z.string(),
            opcoesEnquete: z.array(z.string())
        }
    )
    const { titulo, descricao, opcoesEnquete} = requestBody.parse(request.body);

    const enqueteCriada = await prisma.enquete.create({
        data : {
            titulo,
            descricao,
            opcoesEnquete : {
                createMany:{
                    data : opcoesEnquete.map(opcao => {
                        return {
                            descricao : opcao
                        }
                    })
                }
            }

        }
    })

    return "Criado";   
})

app.listen({port: 3333}).then( () => {
    console.log('SERVIDOR RODANDO')
})