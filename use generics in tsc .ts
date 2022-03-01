export class Message<TYPE_ID,TYPE_BOOLEAN>{
    // readonly : stop overriding value
    public readonly id!:TYPE_ID;
    title!:string;
    message!:string;
    isSent!:TYPE_BOOLEAN;

    constructor(id:TYPE_ID){
        this.id = id;
    }
}

const message1 = new Message<string,boolean>("sdfsd"); 
const message2 = new Message<number,number>(324); 


