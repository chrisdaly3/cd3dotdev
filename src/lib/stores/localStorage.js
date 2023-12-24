import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const userID = browser && window.localStorage.getItem('userID');
export const user = writable(userID || 'visitor');
user.subscribe((name) => {
  if (browser) window.localStorage.setItem('userID', name);
})

const historyInfo = browser && window.localStorage.getItem('history');
export const history = writable(historyInfo ? JSON.parse(historyInfo) : []);
history.subscribe((cmd) => {
  if (browser) window.localStorage.setItem('history', JSON.stringify(cmd));
})
