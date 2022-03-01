export class Message{
    // readonly : stop overriding value
    public readonly id!:string;
    title!:string;
    message!:string;
    isSent!:boolean;

    constructor(id:string){
        this.id = id;
    }
}

const message = new Message(generateString(4)); 
// ! ERROR : Cannot assign to 'id' because it is a read-only property
// message.id = "id";

console.log(message.id);


function generateString(length:number):string {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}