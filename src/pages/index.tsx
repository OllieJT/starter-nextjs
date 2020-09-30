import React from "react";
import Head from "next/head";
import { ExampleComponent } from "../components/example";

const Home = (): React.ReactElement => {
	return (
		<div>
			<Head>
				<title>Homepage</title>
			</Head>

			<main>
				<ExampleComponent />
			</main>
		</div>
	);
};

export default Home;
