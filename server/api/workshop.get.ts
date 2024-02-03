export default defineEventHandler(async () => {
	const request = await fetch("https://api.tougrel.dev/v1/gateway/projects");
	const data = await request.json();

	if (request.status === 200) return data.filter((d: any) => d.settings.workshop);

	throw createError({
		statusCode: request.status,
		statusMessage: request.statusText,
	});
});
