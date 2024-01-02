import { SPORTS_KEY } from '$env/static/private';
import jsonata from 'jsonata';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

export async function GET() {
  let response = await fetch(`https://v1.hockey.api-sports.io/games?league=57&season=2023&date=${yyyy}-${mm}-${dd}&timezone=America/New_York`, {
    method: `GET`,
    headers: {
      'x-apisports-key': SPORTS_KEY
    },
  });

  const games_parser = jsonata(`response.{'date':date, 'home':teams.home.name, 'away':teams.away.name}`);
  const response_body = await response.json();
  const parsed_result = await games_parser.evaluate(response_body);
  console.log(parsed_result);


  return new Response(
    JSON.stringify({
      "test": "This is a test value",
    }),
  )
};
