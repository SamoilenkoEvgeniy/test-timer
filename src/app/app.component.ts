import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public subscription: Subscription;
    public tiks = 0;

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    start() {
        if (!this.subscription || this.subscription.closed) {
            this.subscription = Observable.interval(1000).subscribe(() => {
                this.tiks++;
            });
        }
    }

    wait() {
        this.subscription.unsubscribe();
    }

    reset() {
        this.subscription.unsubscribe();
        this.tiks = 0;
    }
}
