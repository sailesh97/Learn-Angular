import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    // template:`<h3>Server Component</h3>`
})

export class ServerComponent{
    serverId: number = 10; // Though It's a number, It can be easily converted to string. So it will work in string interpolation.
    serverStatus:string = 'offline'; 

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        // Based on which we will change the background color of the elements.
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}