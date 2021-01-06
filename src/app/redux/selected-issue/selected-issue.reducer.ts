import { createReducer, on } from '@ngrx/store';
import { markDone, pauseTimer, selectIssue, startTimer } from './selected-issue.actions';

const initialState: {} = {};

const _selectedIssueReducer = createReducer(
    initialState,
    on(selectIssue, (issue) => issue = issue),
    on(startTimer, (issue) => issue = issue),
    on(pauseTimer, (issue) => issue = issue),
    on(markDone, (issue) => issue = issue)
)

export function selectedIssueReducer(state: any, action: any) {
    return _selectedIssueReducer(state, action);
}
