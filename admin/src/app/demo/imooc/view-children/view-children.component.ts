import {AfterViewInit, Component, Directive, Input, QueryList, ViewChildren} from '@angular/core';
@Directive({selector: 'pane'})
export class Pane {
    @Input() id: string;
}
@Component({
    selector: 'example-app',
    template: `
    <pane id="1"></pane>
    <pane id="2"></pane>
    <pane id="3" *ngIf="shouldShow"></pane>
    <button (click)="show()">Show 3</button>
    <div>panes: {{serializedPanes}}</div> 
  `,
})
export class ViewChildrenComponent implements AfterViewInit {
    @ViewChildren(Pane) panes: QueryList<Pane>;
    
    serializedPanes: string = '';
    shouldShow = false;

    show() {
        this.shouldShow = true;
    }

    ngAfterViewInit() {
        this.calculateSerializedPanes();
        this.panes.changes.do(()=>{
            debugger;

        }).subscribe((r) => {
            this.calculateSerializedPanes();
        });

        
    }

    calculateSerializedPanes() {
        setTimeout(() => {
            this.serializedPanes = this.panes.map(p => p.id).join(', ');
        }, 0);
    }
}
