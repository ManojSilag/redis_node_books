import { createClient } from 'redis';

const client = createClient({
    password: 'a',
    socket: {
        host: 'a',
        port: a
    }
});

client.on("error", (error)=>{
    console.log(error);
})

if(!client.isOpen){
    client.connect()
}

export { client }