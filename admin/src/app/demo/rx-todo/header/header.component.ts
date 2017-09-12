import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-todo-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    inputValue: string = '';

    @Input() placeholder: string = 'What needs to be done?';
    @Input() delay:number = 300;


    @Output() textChange:EventEmitter<string> = new EventEmitter();
    @Output() onEnterUp :EventEmitter<boolean> = new EventEmitter();

    constructor(private elementRef:ElementRef) {
    }

    ngOnInit() {

        const event$ = Observable.fromEvent(this.elementRef.nativeElement,'keyup')
            .map(()=>this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();


        event$.subscribe(input=>this.textChange.emit(input));
    }

    enterUp(){
        this.onEnterUp.emit(true);
        this.inputValue = '';
    }

}
