export type Enviroment = 'development' | 'staging' | "production"

export default class Messenger{
    port: number;
    enviroment: Enviroment;

    constructor(port: number, enviroment: Enviroment){
        this.port = port
        this.enviroment = enviroment
    }

    messagePrint(){
        return `Node and express server is running on port ${this.port} in ${this.enviroment}`
    }
}