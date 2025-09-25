const e=`---
title: Resolving CORS errors in SvelteKit
description: Cross-origin resource sharing requests let a user access resources on one site from another, but only if the server performs the secret CORS handshake with the browser.
slug: notes/sveltekit-cors
publish: true
lastmod: 2024-03-30
date: 2024-03-27
aliases: null
tags:
- status/budding
---

Web browsers try to protect the security of their users. One way they do this is by prohibiting scripts on one domain from interacting with resources on another domain by default. Sometimes as a developer, I *want* users to be able to interact with resources on my site from somewhere else:

* Embedded media
* A widget or badge showing their data on another site
* Calling a public APIs from their browser (client-side)
* Sending analytics data to a 3rd-party analytics server

Requesting a resource on one site from another is called a "cross-origin resource sharing" (CORS) request. While building [Penguinsight](https://penguinsight.com) (it's a tool that enables developers to provide feedback on developer documentation) I had just such a need. Imagine this scenario:

 > 
 > a developer is reading the documentation on using an API from one of my customers. One of the steps doesn't work, and they want to use the Penguinsight widget on the page to provide feedback. That feedback gets sent to the Penguinsight server, which is on a *different* domain than the documentation site.

The user is requesting to access a resource (my API) *cross-origin*. Their browser makes a request to the Penguinsight server, but it's not the \`POST /api/feedback\` request made by my tool. Before that happens, the browser needs to make a "preflight request" to make sure the server allows the actual request. This is done by requesting \`OPTIONS /api/feedback\`. The browser will only make the \`POST\` request if the server tells it that the request is allowed.

\`\`\`\`ts
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
};
\`\`\`\`

\`'Access-Control-Allow-Origin'\` specifies which domains are allowed to *originate* requests for the resource. The wildcard, \`'*'\`, is used to denote that any site can request it. For a public API like on [Penguinsight](https://penguinsight.com), this is the right option.

\`'Access-Control-Allow-Methods'\` gives the browser a comma-separated list of the allowed HTTP method verbs. \`OPTIONS\` is needed for the preflight request, and I also needed \`POST\` for the \`/api/feedback\` endpoint. You can add other HTTP methods here such as \`GET\`, \`PUT\`, or \`PATCH\`, but I didn't need them for Penguinsight.

To make sure my SvelteKit backend responds to CORS requests correctly, I wrote a [SvelteKit server hook](https://kit.svelte.dev/docs/hooks#server-hooks) to add them. SvelteKit hooks can be used to run code on all incoming requests before handing them off to the SvelteKit router.

\`\`\`\`ts twoslash {11-13}
// @filename: allowCORS.hook.ts
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
};
// ---cut---
import type { Handle } from "@sveltejs/kit";

export const allowCORS = (async ({ event, resolve }) => {
  // 1. If the request isn't for a public API, don't add CORS headers
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith('/api'))
    return await resolve(event);

  // 2. for options requests, just return the cors headers immediately.
  // Calling \`resolve(event)\` without an OPTIONS handler will throw an error.
  // If that error isn't handled, the CORS headers won't be added.
  if (event.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // 3. For other request methods, let the sveltekit router resolve it, then add the CORS headers
  const response = await resolve(event);
  for (const [key, value] of Object.entries(corsHeaders)) {
    response.headers.set(key, value);
  }
  return response;
}) satisfies Handle;
\`\`\`\`

This hook has 3 pieces:

1. It checks if the requested path is under \`/api\`, the only Penguinsight resource I want to allow CORS access for. If not, it does nothing.
1. If the request is a preflight \`OPTIONS\` request, it immediately returns success response with the headers specifying which types of requests allow CORS. I intentionally avoid any further sveltekit handling by returning without calling \`resolve(event)\`
1. For all other requests, I let SvelteKit route the request to a handler with \`resolve(event)\`, then add the CORS headers to the response that resulted from it before sending it back to the client.

I've run into CORS issues a few times and it always takes me hours to figure out what's wrong. None of the resources I've found did a good job explaining *why* CORS exists, how it works, or the relevant nuances of the framework in question. I've tried to provide just enough detail on all of those that it makes sense. After finally narrowing it down to the smallest working solution, I wrote this note to document it for my future self and anyone else who needs to support CORS requests.

## Troubleshooting other CORS issues

### Invalid preflight OPTIONS response - 308 Redirect

I ran into this issue with both API calls and CORS requests for static assets. It was particularly difficult to debug because it only occurred when making requests against my production deployment; development and staging environments worked fine with no issues.

After an hour of detective work, I realized that \`http://localhost:5173/selection.js\` and \`https://some-deployment-string.vercel.app/selection.js\` both worked and \`https://penguinsight.com/selection.js\` because of how I had configured my domains in Vercel (my hosting provider). I have \`https://penguinsight.com\` configured to redirect to \`https://www.penguinsight.com\` (with a \`www.\`).

I had two options to fix this:

1. Use \`www.penguinsight.com\` URIs in all my CORS requests
1. Set \`https://penguinsight.com\` as the production domain instead

I opted for option 1 as it provides some extra flexibility for certain technical decisions in the future.

## Addendum

If you need to support authenticated requests, requests with specific \`Content-Type\`, or other header information, there are some additional CORS headers you can add to allow them. Here's an example of a more permissive set of CORS headers:

\`\`\`\`ts
export const corsHeaders = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,PATCH,DELETE',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
};
\`\`\`\`

If any of those are not *needed* for your use case, I suggest not allowing them. Essentially these headers should be shrunk to the minimal set that works for your use case.
`;export{e as default};
