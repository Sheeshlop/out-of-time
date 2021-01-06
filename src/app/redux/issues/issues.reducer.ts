import { createReducer, on } from '@ngrx/store';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { addIssues, removeIssues } from './issues.actions';

const initialState: IIssue[] = [];

const _counterReducer = createReducer(
    initialState,
    on(addIssues, (issues) => issues = issues),
    on(removeIssues, (issues) => issues = issues)
)

export function issuesReducer(state: any, action: any) {
    return _counterReducer(state, action)
}