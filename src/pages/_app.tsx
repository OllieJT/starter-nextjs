import "../styles/index.scss";
import React from "react";
import Head from "next/head";
import type { AppProps /* , AppContext */ } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const isDev = process.env.NODE_ENV === "development";
const configuration: MetadataConfiguration = {
	color: "#FF00FF",

	site_name: "SiteName",
	site_url: isDev ? "http://localhost:3000" : "todo.todo",
	site_title: "Website Title",

	twitter_username: "todo",
	twitter_id: "todo",
};

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	// const { theme, setTheme } = useTheme()
	return (
		<>
			<DefaultSeo
				title={configuration.site_title}
				titleTemplate={`%s | ${configuration.site_name}`}
				openGraph={{
					type: "website",
					locale: "en_US", //en_GB
					url: configuration.site_url,
					site_name: configuration.site_name,
				}}
				twitter={
					configuration.twitter_username
						? {
								handle: `@${configuration.twitter_username}`,
								site: `@${configuration.twitter_username}`,
								cardType: "summary_large_image",
						  }
						: {}
				}
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width,initial-scale=1",
					},
					{
						name: "twitter:site:id",
						content: configuration.twitter_id,
					},

					{
						name: "apple-mobile-web-app-title",
						content: configuration.site_name,
					},

					{
						name: "apple-mobile-web-app-capable",
						content: "yes",
					},

					{
						name: "apple-touch-fullscreen",
						content: "yes",
					},

					{
						name: "apple-mobile-web-app-status-bar-style",
						content: "black",
					},

					{ name: "msapplication-config", content: "/browserconfig.xml" },
					{ name: "msapplication-TileColor", content: configuration.color },
					{ name: "theme-color", content: configuration.color },

					{
						name: "developer",
						content: "TheOllieJT",
					},
					{
						name: "message",
						content:
							"Hello curious code wrangler... curious about how this site was built, eh? You can find me on twitter @TheOllieJT",
					},
				]}
			/>
			<Head>
				<link
					href={configuration.site_url}
					rel="bookmark"
					title={configuration.site_name}
				/>
				<link rel="icon" href="/img/favicon.svg" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/img/icon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/img/icon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/img/icon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
