import { Component, OnInit, Input} from '@angular/core';
import { ICarouselItem } from "./carousel-item";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselId: string;  
  carouselItems: ICarouselItem[];
  fileUrl: string = '../assets/api/carousel-items.json';

  constructor(private _http: HttpClient) { }

  public getCarouselItems(): Observable<ICarouselItem[]>{
    return this._http.get<ICarouselItem[]>(this.fileUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  public isActive(i: number): boolean{
    return this.carouselItems[i].url == this.carouselItems[0].url;
  }

  private handleError(err){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  ngOnInit(): void {
    this.getCarouselItems().subscribe(
      items => this.carouselItems = items.filter(i => i.carouselId === this.carouselId)
    );
  }
}
