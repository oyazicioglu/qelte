export class DataTableUtil {
    #data = undefined;

    constructor(data) {
        this.#data = data;
    }

    limit(limit, page) {
        if (page === undefined || limit === undefined) {
            return;
        }

        if (limit === 0) {
            return this.#data;
        }

        let start = limit * (page - 1);
        let end = start + limit;

        return { headers: this.#data.headers, rows: this.#data.rows.slice(start, end) };
    }

    filterGlobaly(value) {
        if (!value) {
            return this.#data;
        }

        //TODO: Search in every rows and every columns
        return { rows: undefined, headers: undefined };
    }
}
