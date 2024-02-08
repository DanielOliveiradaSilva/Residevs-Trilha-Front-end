import { Component } from '@angular/core';
import { StreamService } from '../../Service/stream.service';
@Component({
  selector: 'app-input-json',
  templateUrl: './input-json.component.html',
  styleUrl: './input-json.component.css'
})
export class InputJsonComponent {
  data:any = [];

  constructor(private Stream: StreamService) {}
  readJson(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.data = JSON.parse(fileReader.result as string);
        this.Stream.setData(this.data)
      }
      fileReader.readAsText(input.files[0]);
    }
  }
}
