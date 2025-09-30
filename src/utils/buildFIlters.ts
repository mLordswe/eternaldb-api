import qs, { type ParsedQs } from "qs";
export const buildFilters = (query: ParsedQs): Record<string, any> => {
	const filters: Record<string, any> = {};

	Object.entries(query).forEach(([field, raw]) => {
		if (raw == null) return;
		const value = Array.isArray(raw) ? raw[0] : raw;

		if (value !== "" && !isNaN(Number(value))) {
			filters[field] = Number(value);
		} else if (value !== "") {
			filters[field] = { contains: String(value) };
		}
	});

	return filters;
};
