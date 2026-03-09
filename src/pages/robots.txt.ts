import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	const baseUrl = site?.toString().replace(/\/$/, "") ?? "https://canelitagames.com";

	return new Response(
		[
			"User-agent: *",
			"Allow: /",
			`Sitemap: ${baseUrl}/sitemap-index.xml`,
		].join("\n"),
		{
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
			},
		},
	);
};
