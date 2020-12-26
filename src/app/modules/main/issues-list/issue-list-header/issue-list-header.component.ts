import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-list-header',
  templateUrl: './issue-list-header.component.html',
  styleUrls: ['./issue-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueListHeaderComponent implements OnInit {

  constructor() { }

  @Output() selectAll: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteSelected: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  check(state: boolean): void {
    this.selectAll.emit(state);
  }

  deleteIssues(): void {
    this.deleteSelected.emit(true);
  }
}
