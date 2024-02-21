import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl : './servers.component.html',
    styleUrl : './servers.component.css',
    styles : [`
        h3 {
            color:red;
        }
    `]
})

export class ServersComponent{

    allowNewServer = false;
    status = "not created";
    serverName = "Test Server";

    test(){
        return "Allow new server : " + this.allowNewServer;
    }

    onCreateServer(){
        this.status="Created";
    }

}