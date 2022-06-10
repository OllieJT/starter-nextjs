import React from "react";
import Head from "next/head";
import { ExampleComponent } from "src/components/example";
import { InputDateTime } from "$components/input/input-date-time";

/* export const getServerSideProps: GetServerSideProps<any> = async () => {
	// Fetch data from external API
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/hello-world?name=Ollie`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}; */

const Home = ({ data }: { data: any }): React.ReactElement => {
	return (
		<div>
			<Head>
				<title>Homepage</title>
			</Head>

			<main>
				<pre>{JSON.stringify(data, null, 4)}</pre>

				<InputDateTime />

				<ExampleComponent />
			</main>
		</div>
	);
};

export default Home;
