import { createAction } from '@ngrx/store';

export const selectIssue = createAction('[Selected Issue] Select issue');
export const startTimer = createAction('[Selected Issue] Start timer');
export const pauseTimer = createAction('[Selected Issue] Pause timer')
export const markDone = createAction('[Selected Issue] Mark issue done');