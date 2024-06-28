import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TaskInProgressComponent } from '../../components/task-in-progress/task-in-progress.component';
import { NextEventComponent } from '../../components/next-event/next-event.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent,TaskInProgressComponent, NextEventComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public  nestedStatus = [
    {
      "status": "To Do",
      "statusNumber": "20",
      "statusIcon":"list",
      "color":"success"
    },
    {
      "status": "In progress",
      "statusNumber": "10",
      "statusIcon":"timer",
      "color":"warning"
    },
    {
      "status": "Done Today",
      "statusNumber": "5",
      "statusIcon":"checkmark",
      "color":"info"
    },
    {
      "status": "Done this week",
      "statusNumber": "7",
      "statusIcon":"checkmark",
      "color":"info"
    },
    {
      "status": "Done this month",
      "statusNumber": "6",
      "statusIcon":"checkmark",
      "color":"info"
    }
  ];
}
