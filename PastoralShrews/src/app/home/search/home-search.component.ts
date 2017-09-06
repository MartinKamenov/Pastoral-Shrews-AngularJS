import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'home-search',
    templateUrl: './home-search.component.html'
})

export class HomeSearchComponent {
    @Output()
    changed: EventEmitter<String>;
    filter: string;

    constructor() {
        this.changed = new EventEmitter<String>();
    }

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.filter);
    }
}
