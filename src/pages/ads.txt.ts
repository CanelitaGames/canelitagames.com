import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	const client = import.meta.env.PUBLIC_GOOGLE_ADSENSE_CLIENT;
	const publisherId = client?.replace(/^ca-pub-/, "pub-");

	const body = publisherId
		? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
		: "# Add PUBLIC_GOOGLE_ADSENSE_CLIENT in your environment to publish your AdSense ads.txt entry.\n";

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
