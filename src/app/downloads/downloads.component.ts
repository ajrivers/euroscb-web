import { Component, OnInit } from '@angular/core';
import { IDownload } from './download';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})

export class DownloadsComponent implements OnInit {

  downloadsList: IDownload[];

  constructor(private _downloadService: DownloadService) { }

  ngOnInit(): void {
    this._downloadService.getDownloads().subscribe(
      faqs => {
        this.downloadsList = faqs;
      }
    );
  }

}
