import { format } from "date-fns";

export const formatDatePretty = (d: Date): string => {
	if (!!d) return format(d, "do MMM yyyy");
	else return d;
};
