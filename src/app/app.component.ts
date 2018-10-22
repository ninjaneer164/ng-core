import {
    Component
} from '@angular/core';
import {
    BaseComponent,
    EventService
} from './_core';
import {
    User
} from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {

    public title: string = 'app';

    constructor(
        protected eventService: EventService
    ) {
        super();

        const u = new User({
            firstName: 'foo',
            lastName: 'bar',
            username: 'foo@bar.com'
        });
        console.log(u);
        const u_ = u.toObject();
        console.log(JSON.stringify(u_));
        const u0 = u.clone();
        console.log(u0);
        const u0_ = u0.toObject();
        console.log(JSON.stringify(u0_));

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
