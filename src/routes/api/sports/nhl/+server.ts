import { SPORTS_KEY } from '$env/static/private';
import jsonata from 'jsonata';
import type { HTMLResponse } from '$lib/commands';


const HOCKEY_SEASON = '2023'
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

async function generateGameRows(data: Array<{ date: string, home: string, away: string }>): Promise<string> {
  return data.map(row => `
      <tr>
        <td class="border-y border-love px-4 text-center">${row.away}</td>
        <td class="border-y border-love px-1">@</td>
        <td class="border-y border-love px-4 text-center">${row.home}</td>
        <td class="border-y border-love px-4 text-center gameDate">${new Date(row.date).toUTCString()}</td>
      </tr>
    `).join('');
};


async function generateStandingsRows(data: Array<{ group: string, ranking: number, team: string, points: number, games_played: number }>): Promise<string> {
  return data.map(row => `
      <tr>
        <td class="border-y border-love px-2 text-center">${row.ranking}</td>
        <td class="border-y border-love px-2 text-center">${row.team}</td>
        <td class="border-y border-love px-2 text-center">${row.points}</td>
        <td class="border-y border-love px-2 text-center">${row.games_played}</td>
      </tr>
    `).join('');
};

export async function GET() {
  let gamesResponse = await fetch(`https://v1.hockey.api-sports.io/games?league=57&season=${HOCKEY_SEASON}&date=${yyyy}-${mm}-${dd}&timezone=America/New_York`, {
    method: `GET`,
    headers: {
      'x-apisports-key': SPORTS_KEY
    },
  });

  let standingsResponse = await fetch(`https://v1.hockey.api-sports.io/standings?league=57&season=${HOCKEY_SEASON}`, {
    method: `GET`,
    headers: {
      'x-apisports-key': SPORTS_KEY
    },
  });

  const games_parser = jsonata(`response.{'date':date, 'home':teams.home.name, 'away':teams.away.name}`);
  const atlanticParser = jsonata(`$filter(response[0].{'group':group.name, 'ranking':position, 'team':team.name, "points": points, "games_played":games.played}, function($v) {$v.group ~> /^Atlantic/})`)
  const centralParser = jsonata(`$filter(response[0].{'group':group.name, 'ranking':position, 'team':team.name, "points": points, "games_played":games.played}, function($v) {$v.group ~> /^Central/})`)
  const metroParser = jsonata(`$filter(response[0].{'group':group.name, 'ranking':position, 'team':team.name, "points": points, "games_played":games.played}, function($v) {$v.group ~> /^Metro/})`)
  const pacificParser = jsonata(`$filter(response[0].{'group':group.name, 'ranking':position, 'team':team.name, "points": points, "games_played":games.played}, function($v) {$v.group ~> /^Pacific/})`)

  const gamesResponseBody = await gamesResponse.json();
  const conferenceResponseBody = await standingsResponse.json();

  const parsedGames = await games_parser.evaluate(gamesResponseBody);
  const atlanticStandings = await atlanticParser.evaluate(conferenceResponseBody);
  const centralStandings = await centralParser.evaluate(conferenceResponseBody);
  const metroStandings = await metroParser.evaluate(conferenceResponseBody);
  const pacificStandings = await pacificParser.evaluate(conferenceResponseBody);


  const gameDetails: HTMLResponse = {
    element: `
      <span class="pl-1 pb-0 font-bold">**Today's Games**</span>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="border-y border-love">Away</th>
            <th class="border-y border-love"></th>
            <th class="border-y border-love">Home</th>
            <th class="border-y border-love">Time</th>
          </tr>
        </thead>
        <tbody>
          ${await generateGameRows(parsedGames)}
        </tbody>
      </table>
    `
  };

  const standingsDetails: HTMLResponse = {
    element: `
      <span class="pl-3 font-bold">**ATLANTIC DIVISION**</span>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="border-y border-love px-4">Rank</th>
            <th class="border-y border-love px-4">Team</th>
            <th class="border-y border-love px-4">Points</th>
            <th class="border-y border-love px-4">Games Played</th>
          </tr>
        </thead>
        <tbody>
          ${await generateStandingsRows(atlanticStandings)}
        </tbody>
      </table>
      <span class="pl-3 font-bold">**METROPOLITAN DIVISION**</span>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="border-y border-love px-4">Rank</th>
            <th class="border-y border-love px-4">Team</th>
            <th class="border-y border-love px-4">Points</th>
            <th class="border-y border-love px-4">Games Played</th>
          </tr>
        </thead>
        <tbody>
          ${await generateStandingsRows(metroStandings)}
        </tbody>
      </table>
      <span class="pl-3 font-bold">**CENTRAL DIVISION**</span>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="border-y border-love px-4">Rank</th>
            <th class="border-y border-love px-4">Team</th>
            <th class="border-y border-love px-4">Points</th>
            <th class="border-y border-love px-4">Games Played</th>
          </tr>
        </thead>
        <tbody>
          ${await generateStandingsRows(centralStandings)}
        </tbody>
      </table>
      <span class="pl-3 font-bold">**PACIFIC DIVISION**</span>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="border-y border-love px-4">Rank</th>
            <th class="border-y border-love px-4">Team</th>
            <th class="border-y border-love px-4">Points</th>
            <th class="border-y border-love px-4">Games Played</th>
          </tr>
        </thead>
        <tbody>
          ${await generateStandingsRows(pacificStandings)}
        </tbody>
      </table>
    `
  }

  return new Response(
    JSON.stringify({
      "gamesElement": gameDetails,
      "standingsElement": standingsDetails,
    }),
  )
};
