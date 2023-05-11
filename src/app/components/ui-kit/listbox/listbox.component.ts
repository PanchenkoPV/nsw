import { Component } from '@angular/core';


@Component({
    selector: 'app-listbox',
    templateUrl: './listbox.component.html',
    styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent {
    sizes = ['XS', 'S', 'M', 'L', 'XL'];
}
