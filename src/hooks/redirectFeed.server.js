/**@type {import("@sveltejs/kit").Handle} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const redirectFeed = async ({ event, resolve }) => {
	if (event.url.pathname === '/blog/feed') {
		return Response.redirect(`${event.url.origin}/blog/feed.xml`, 301);
	}
	return await resolve(event);
};
