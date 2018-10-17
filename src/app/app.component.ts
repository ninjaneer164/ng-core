import {
    Component
} from '@angular/core';
import {
    BaseComponent,
    EventService
} from './_core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

    public title: string = 'app';

    constructor(
        protected eventService: EventService
    ) {
        super();

        this.registerEvent('foo', (d) => {
            console.log(d);
        });
        this.registerEvent('bar', (d) => {
            console.log(d);
        });

        setTimeout(() => {
            this.dispatchEvent('foo', 'foo');
            this.dispatchEvent('bar', 'bar');
        }, 1000);
    }
}
