import {Component, OnInit} from '@angular/core';
import {Contact} from "../concat";

import {ContactService} from "../contact.service";
import {UserService} from "../../core/user.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    //用两个服务实例
    providers: [ContactService]

})
export class ContactComponent implements OnInit {

    contact: Contact;
    contacts: Contact[];
    msg = 'Loading contacts ...';
    userName = '';

    constructor(private contactService: ContactService, userService: UserService) {
        this.userName = userService.name;
        
        console.log(1);
        
    }

    ngOnInit() {
        this.contactService.getContacts()
            .subscribe(contacts => {
                this.msg = '';
                this.contacts = contacts;
                this.contact = contacts[0];
            })

    }

    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) {
            ix = 0
        }
        this.contact = this.contacts[ix];
    }

    onSubmit() {
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact() {
        this.displayMessage('New contact');
        this.contact = {id: 42, name: ''};
        this.contacts.push(this.contact);
    }

    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1000);
    }

}
