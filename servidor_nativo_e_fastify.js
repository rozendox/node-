//import {createServer} from 'node:http'

//const server = createServer((request,
//                            response) =>{
//    response.write('hello')

//    return response.end()
//})

//server.listen(53331)

//POST localhost:3331/videos
//DELET localhost:3332/videos/1

import {fastify} from "fastify";

const server = fastify()

server.get('/',() => {
    return'hello world'
})

server.get('/inicio',() => {
    return'inicio'
})

server.get('/exemplo1',() => {
    return'exemplo1'
})

server.listen({
    port:2223,
})
