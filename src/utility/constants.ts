interface Configuration {
	color: string;
	site_name: string;
	site_url: string;
	site_title: string;

	twitter_username?: string;
	twitter_id: string;
}

const isDev = process.env.NODE_ENV === "development";

export const configuration: Configuration = {
	color: "FFC92A",

	site_name: "SiteName",
	site_url: isDev ? "http://localhost:3000" : "todo.todo",
	site_title: "Website Title",

	twitter_username: "todo",
	twitter_id: "todo",
};
