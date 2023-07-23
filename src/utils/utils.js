export const ellipsis = (text, size) => {
	if (text.length > size) {
		return `${text.split("").slice(0, size).join("")}...`;
	}
	return text;
};
