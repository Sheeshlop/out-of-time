import { createAction, props } from '@ngrx/store';
import { IIssue } from 'src/app/interfaces/github/issue.interface';

export const fetchSingleIssue = createAction('[Issues-list component] Fetch Single Issue', props<IIssue>());
export const fetchMultipleIssues = createAction('[Issues-list component] Fetch Multiple Issues', props<any>());
export const addIssue = createAction('[Issues-list component] Add Issue');
export const removeIssue = createAction('[Issues-list component] Remove Issue');
export const reset = createAction('[Issues-list component] Reset Issues');
