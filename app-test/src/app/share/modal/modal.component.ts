import {
    Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver,
    ComponentRef
} from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input()
    content: Component;

    @Input()
    okButtonText: string = '确定';

    @Input()
    title: string;

    @Input()
    toolbarColor: string = 'dark';

    @ViewChild('viewport', {read: ViewContainerRef})
    viewport: ViewContainerRef;

    childParams: any;


    constructor(private params: NavParams, private cfr: ComponentFactoryResolver, private viewCtrl: ViewController) {
        this.init();
    }

    private init() {
        //todo 这个方法有点土

        this.content = this.params.get('childComponent');
        this.childParams = this.params.get('childParams');
        this.okButtonText = this.params.get('okButtonText') || this.okButtonText;
        this.title = this.params.get('title') || this.title;
        this.toolbarColor = this.params.get('toolbarColor') || this.toolbarColor;
    }

    ionViewWillEnter() {
        this.load(this.content);
    }

    private  load(content) {
        if (content) {
            let componentFactory = this.cfr.resolveComponentFactory(content);
            let componentRef = this.viewport.createComponent(componentFactory, this.viewport.length, this.viewport.parentInjector);

            console.log(componentRef.instance);


            componentRef.instance['params'] = [1, 2];


            //   this.viewCtrl._setInstance(componentRef)

        }

    }

    ok() {
        this.dismiss()
    }

    cancel() {
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

    ngOnInit() {
    }

}
