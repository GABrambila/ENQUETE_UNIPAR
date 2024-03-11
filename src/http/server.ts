import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";
import { request } from "http";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { criarEnquete } from "./routes/criar-enquete";
import { listarEnquetes } from "./routes/listar-enquetes";
import { obterEnquete } from "./routes/obter-enquete";

const app = fastify()
app.register(criarEnquete)
//const prisma = new PrismaClient();
/*app.get('/unipar', () => {
    return 'Ola FASTIFY'
})*/
app.register(listarEnquetes)
app.register(obterEnquete)

app.listen({port: 3333}).then( () => {
    console.log('SERVIDOR RODANDO')
})
