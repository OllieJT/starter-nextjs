/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

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
				</body>
			</Html>
		);
	}
}

export default MyDocument;
