import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const userID = browser && window.localStorage.getItem('userID');
export const user = writable(userID || 'visitor');
user.subscribe((name) => {
  if (browser) window.localStorage.setItem('userID', name);
})

const historyInfo = browser && window.sessionStorage.getItem('history');
export const history = writable(historyInfo ? JSON.parse(historyInfo) : []);
history.subscribe((cmd) => {
  if (browser) window.sessionStorage.setItem('history', JSON.stringify(cmd));
})

export const userMessageCount = browser && window.sessionStorage.getItem('msgCount');
export const messages = writable(userMessageCount || '');
messages.subscribe((num) => {
  if (browser) window.sessionStorage.setItem('msgCount', num)
})
