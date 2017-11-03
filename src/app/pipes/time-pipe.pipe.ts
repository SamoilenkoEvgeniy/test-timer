import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

    times = {
        year: 31557600,
        month: 2629746,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    transform(seconds): any {
        let time_string = '';

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds / 60) % 60);
        seconds = seconds % 60;

        time_string = this._to2digit(hours) + ':' + this._to2digit(minutes) + ':' + this._to2digit(seconds);

        return time_string;
    }

    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    }

}
