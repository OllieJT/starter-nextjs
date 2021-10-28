const isDev = process.env.NODE_ENV === "development";

export const configuration: MetadataConfiguration = {
	color: "FFC92A",

	site_name: "SiteName",
	site_url: isDev ? "http://localhost:3000" : "todo.todo",
	site_title: "Website Title",

	twitter_username: "todo",
	twitter_id: "todo",
};
