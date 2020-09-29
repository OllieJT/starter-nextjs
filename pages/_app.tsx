import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";

const meta = {
	siteName: "todo",
	siteUrl: "todo",
	twitter: {
		username: "TheOllieJT",
		id: "427323948"
	}
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>

				<link rel="icon" href="/favicon.ico" />

				<meta property="og:site_name" content={meta.siteName} />
				<meta property="twitter:site" content={meta.twitter.username} />
				<meta property="twitter:site:id" content={meta.twitter.id} />

				<meta
					key="apple-webapp-title"
					name="apple-mobile-web-app-title"
					content={meta.siteName}
				/>
				<meta
					key="apple-webapp-capable"
					name="apple-mobile-web-app-capable"
					content="yes"
				/>
				<meta
					key="apple-touch-fullscreen"
					name="apple-touch-fullscreen"
					content="yes"
				/>
				<meta
					key="apple-webapp-style"
					name="apple-mobile-web-app-status-bar-style"
					content="black"
				/>
				<meta key="designer" name="designer" content="OllieJT <olliejt.com>" />
				<link rel="bookmark" title={meta.siteName} href={meta.siteUrl} />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
