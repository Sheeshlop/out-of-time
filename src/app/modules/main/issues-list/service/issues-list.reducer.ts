import { createReducer, on } from '@ngrx/store';
import { fetchSingleIssue, addIssue, removeIssue, reset, fetchMultipleIssues } from './issues-list.actions';

export const issuesListFeatureKey = 'issuesListFeature';

export const initialState = [];

const issuesListReducer = createReducer(
    initialState,
    on(fetchSingleIssue, (state) => {
        onFetchSingleIssue(state);
        return state;
    }),
    on(fetchMultipleIssues, (state) => {
        onFetchMultipleIssues(state);
        return state;
    }),
    on(addIssue, (state) => state),
    on(removeIssue, (state) => state),
    on(reset, (state) => [])
);

function onFetchSingleIssue(state: any): void {
    console.log('fetched single issue!', state);
}
function onFetchMultipleIssues(state: any): void {
    console.log('fetched multiple issues!', state);
}

export function getIssuesListReducer(state: any, action: any): any {
    return issuesListReducer(state, action);
}
