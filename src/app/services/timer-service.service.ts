import {Injectable} from '@angular/core';

@Injectable()
export class TimerServiceService {

    key_time = 'time';

    constructor() {
    }

    startTime() {
        const time = localStorage.getItem(this.key_time);

    }

}
