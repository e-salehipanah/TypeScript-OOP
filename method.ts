// ! note : name must be pascal case
export class Message {
    title: string;
    message: string;
    isSent: boolean;
    
    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    previewMessage(): string {
        return this.message.slice(0,10).concat('...');
    }


}

const message = new Message('New Course','Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.');

console.log(message.previewMessage());
;