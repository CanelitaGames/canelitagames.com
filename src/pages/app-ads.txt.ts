import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const customEntries = import.meta.env.PUBLIC_APP_ADS_TXT_LINES?.trim();
	const client = import.meta.env.PUBLIC_GOOGLE_ADSENSE_CLIENT;
	const publisherId = client?.replace(/^ca-pub-/, "pub-");

	const body = customEntries
		? `${customEntries}\n`
		: publisherId
			? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
			: "# Add PUBLIC_APP_ADS_TXT_LINES in your environment to publish your app-ads.txt entry.\n";

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};