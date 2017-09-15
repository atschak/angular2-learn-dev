import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IUserVO} from "./user.data";

@Component({
    selector: 'user',
    styles: [`
        .hide {
            display:none;
        }
    `],
    template: `
    <div>
       <div class="uk-card uk-card-primary">

            <div class="uk-card-media-top">
                 <img *ngIf="user.image" [src]="user.image">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title" innerText="{{user.name}}"></h3>
                 <p [class.hide]="hidden">{{getDescription()}}</p>

                 <button class="uk-button uk-button-secondary" (click)="onClick($event)">Hide Description</button>
            </div>
           <div class="uk-card-footer">
            <ul class="uk-iconnav">
                <li><a href="#" uk-icon="icon: plus"></a></li>
                <li><a href="#" uk-icon="icon: file-edit"></a></li>
                <li><a href="#" uk-icon="icon: copy"></a></li>
                <li><a href="#" uk-icon="icon: trash"></a></li>
            </ul>

           </div>

        </div>
    </div>
    `
})

export class UserComponent{
    @Input('userObj')
    user:IUserVO;

    @Output('choiced')
    choice:EventEmitter<IUserVO> = new EventEmitter<IUserVO>();


    hidden:boolean          = false;

    getDescription() :string {
        return this.user.desc;
    }

    onClick (evt: Event) :void {
        this.hidden =  (this.hidden) ? 0 : 1;
        this.choice.emit( this.user );
    }
}