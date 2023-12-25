import { RESEND_KEY } from "$env/static/private";
import { Resend } from  "resend";
import type { Actions } from "@sveltejs/kit";

const resend = new Resend(RESEND_KEY)

export const actions = {
  default: async (event) => {
    //TODO: configure default POST action to resend API
    /*
    (async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
    */
  },
} satisfies Actions
