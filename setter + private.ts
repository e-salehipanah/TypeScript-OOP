// ! note : name must be pascal case
export class Message {
    title: string;
    message: string;
    private _isSent: boolean;
    deliveryDate : Date;
    
    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this._isSent = false;
    }

    set isSent(value:boolean){
        if(value=== true){
            this.deliveryDate = new Date();
        }
        this._isSent = value;  
    }

    get isSent():boolean { return this._isSent; }

}


const message = new Message('New Course','Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.');

message.isSent = true;