import { Component } from '@angular/core';

@Component({
    selector: 'app-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

    files: File[] = [];

    onSelect(event:any) {
        this.files.push(...event.addedFiles);
    }

    onRemove(event:any) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
