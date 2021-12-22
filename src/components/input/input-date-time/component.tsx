import { useState } from "react";
import style from "./style.module.scss";

export function InputDateTime() {
	const [dateTime, setDateTime] = useState(new Date());

	console.log({ dateTime });

	return (
		<input
			className={style.input}
			type="datetime-local"
			onChange={(e) => {
				const dateInput = e.target.value;
				const dateOutput = new Date(e.target.value).toUTCString();
				console.log({ dateInput, dateOutput });
				//setDateTime(new Date(e.target.value)})
			}}
		/>
	);
}
