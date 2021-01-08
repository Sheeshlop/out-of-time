import { ITrackerTime } from '../time-tracker/time-tracker.interface';
import { IGithubUser } from './user.interface';

export interface IIssue {
	username: string;
	reponame: string;
	checked: boolean;
	estimatedTime: ITrackerTime;
	trackedTime: ITrackerTime;
	info: IGithubIssue;
}

export interface IGithubIssue {
	active_lock_reason: string | null;
	assignee: IGithubUser[];
	author_association: string;
	body: string;
	closed_at: string;
	comments: number;
	comments_url: string;
	created_at: string;
	events_url: string;
	html_url: string;
	id: number;
	labels: ILabel[];
	labels_url: string;
	locked: boolean;
	milestone: IMilestone | null;
	node_id: string;
	number: number;
	performed_via_github_app: boolean | null; // ?
	pull_request?: IPullRequest;
	repository_url: string;
	state: 'open' | 'closed';
	title: string;
	updated_at: string;
	url: string;
	user: IGithubUser;
}

export interface ILabel {
	color: string;
	default: boolean;
	description: string;
	id: number;
	name: string;
	node_id: string;
	url: string;
}

interface IMilestone {
	closed_at: string | null;
	closed_issues: number;
	created_at: string;
	creator: IGithubUser;
	description: string;
	due_on: string | null; // ?
	html_url: string;
	id: number;
	labels_url: string;
	node_id: string;
	number: number;
	open_issues: number;
	state: 'open' | 'closed';
	title: string;
	updated_at: string;
	url: string;
}

interface IPullRequest {
	diff_url: string;
	html_url: string;
	patch_url: string;
	url: string;
}
