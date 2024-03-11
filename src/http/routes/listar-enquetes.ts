import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"

export async function listarEnquetes(app:FastifyInstance){
app.get('/listarEnquetes', async ( request, reply) =>{ 
    const listarEnquetes = await prisma.enquete
    .findMany({
        include : {
            opcoesEnquete: true
        }
    })

    return reply.send(listarEnquetes)
})
}