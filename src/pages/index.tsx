import React from "react";
import Head from "next/head";

const Home = (): React.ReactElement => {
	return (
		<div>
			<Head>
				<title>Homepage</title>
			</Head>

			<main>
				<div className="p-4 shadow rounded bg-white">
					<h1 className="text-purple-500 leading-normal">Next.js</h1>
					<p className="text-gray-500">with Tailwind CSS</p>
				</div>
			</main>
		</div>
	);
};

export default Home;
