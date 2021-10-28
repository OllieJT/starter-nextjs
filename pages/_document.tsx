import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		return await Document.getInitialProps(ctx);
	}

	render(): React.ReactElement {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					<Script
						src="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
						strategy="beforeInteractive"
					/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
