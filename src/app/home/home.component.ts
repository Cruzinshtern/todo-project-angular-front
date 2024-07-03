import { Component, OnInit } from '@angular/core';
import { ProjectButtonComponent } from '../shared/components/project-button/project-button.component';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectButtonComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  changingTextArray: string[] = ["tasks", "life", "bussiness"];
  changingHeader: string = this.changingTextArray[0];

  constructor(private _router: Router, private _scroller: ViewportScroller) {}

  ngOnInit(): void {
    this._handleChangingHeader();
  }

  async redirectToTodoForm() {
    await this._router.navigate(['create']);
  }

  private _handleChangingHeader() {
    let maxSteps = this.changingTextArray.length - 1;
    let idx = 0;
    interval(3000).subscribe((data) => {
      if (data) {
        idx = idx + 1;
        if(idx > maxSteps) {
          idx = 0;
        }
      }
      this.changingHeader = this.changingTextArray[idx]
    })
  }
}
