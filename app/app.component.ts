import {Component} from '@angular/core';
import {IUserVO, userData} from "./user/user.data";

@Component( {
    selector: 'app',
    templateUrl:  './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})


export class AppComponent {


    userList:IUserVO[] = userData;
    constructor() {
        console.log('######  AppComponent created  #####');
    }

    selected(selectedUser:IUserVO) {
        console.log('user selected', selectedUser);
    }
}