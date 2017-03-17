import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

    constructor() {
    }


    c() {

        const tpl = adds => `
            <ul>
                <li>
                <% for(var let i=0 ;i<.length;i++){%>
                <%= data.suplies[i]%>
                </li>
                <%}%>
             </ul>        
             `;

        function compile(template) {
            const evalExpr = /<%=(.+?)%>/g;
            const expr = /<%([\s\S]+?)%>/g;

            template = template
                .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
                .replace(expr, '`); \n $1 \n  echo(`');

            template = 'echo(`' + template + '`);';

            return `(function parse(data){
                    var output = "";
                
                function echo(html){
                output += html;
                }
                ${ template }
            
                return output;
              })`;


        }
    }

    ngOnInit() {

        console.log('x'.repeat(5));
        console.log((<any>'x').padStart(11, '_@_'));
        console.log((<any>'x').padEnd(11, '_@_'));
        console.log((<any>'09-12').padStart(10, 'YYYY-MM-DD'));


        Object.defineProperty(Object.prototype, '__proto__', {
            get(){
                let _thisObj = Object(this);
                return Object.getPrototypeOf(_thisObj);

            }


        })


    }


}
