import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements AfterViewInit {
  slides!: NodeListOf<HTMLInputElement>;
  navigation!: NodeListOf<HTMLLabelElement>;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.slides = this.elementRef.nativeElement.querySelectorAll('input[name="slide"]');
    this.navigation = this.elementRef.nativeElement.querySelectorAll('.navigation label');

    this.navigation.forEach((label, index) => {
      label.addEventListener('click', () => {
        (this.slides[index] as HTMLInputElement).checked = true;
        this.handleSlideChange();
      });
    });

    window.addEventListener('resize', this.handleSlideChange.bind(this));

    this.handleSlideChange();
  }

  handleSlideChange() {
    const activeSlide = this.elementRef.nativeElement.querySelector('input[name="slide"]:checked') as HTMLInputElement;
    const activeIndex = Array.from(this.slides).indexOf(activeSlide);
    const slideWidth = (this.elementRef.nativeElement.querySelector('.image') as HTMLDivElement).offsetWidth;
    const slideContainer = this.elementRef.nativeElement.querySelector('.slides') as HTMLDivElement;

    slideContainer.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
  }

}
