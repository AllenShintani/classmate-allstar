import type { FastifyInstance } from 'fastify'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()

async function fetchData() {
  (async () => {
    await fastify.register(cors, {
      // 送り返す！
    })

    fastify.post('/data', (req, reply) => {
      const data = req.body as {
        mail: string
        password: string
        name: string
        familly: string
      }
      console.log(data)
      const fmail: string = data.mail
      const fpassword: string = data.password
      const fname: string = data.name
      const ffamilly: string = data.familly
      console.log('postで受け取ることはできた')
      return main(fmail, fpassword, fname, ffamilly, data)
    })

    await fastify.listen({ port: 8080 })
    console.log(`Server listening at ${8080}`)
  })()

}

async function main(
  fmail: string,
  fpassword: string,
  fname: string,
  ffamilly: string,
  data: any
) {
  const result = await prisma.user.create({
    data: {
      mail: fmail,
      name: fname,
      password: fpassword,
      familly: ffamilly,
    },
  })
  console.log(result)
  console.log('mainは回った')
  //return response()
}

fetchData()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.log('これでもう終わる！')
    await prisma.$disconnect()
  })