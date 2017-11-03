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
        console.log(this.subscription);
        if (!this.subscription) {
            this.subscription = Observable.interval(1000).subscribe(res => {
                this.tiks++;
            });
        }
    }

    wait() {
        this.subscription.unsubscribe();
        delete this.subscription;
    }

    reset() {
        this.subscription.unsubscribe();
        delete this.subscription;
        this.tiks = 0;
    }
}
