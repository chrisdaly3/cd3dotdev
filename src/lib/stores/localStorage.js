import { browser } from '$app/environment';
import { writable, readable} from 'svelte/store';

const userID = browser && window.localStorage.getItem('userID');
export const user = writable(userID || 'visitor');

const historyInfo = browser && window.localStorage.getItem('history');
export const history = writable(historyInfo ? JSON.parse(historyInfo) : []);

