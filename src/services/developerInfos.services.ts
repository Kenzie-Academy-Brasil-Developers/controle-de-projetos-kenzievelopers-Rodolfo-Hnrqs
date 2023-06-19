import format from "pg-format";
import { developerInfos, developerInfosCreate, developerInfosResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: developerInfosCreate): Promise<developerInfos> => {
    const queryFormat: string = format(
        'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: developerInfosResult = await client.query(queryFormat);

    return query.rows[0];
};

export default { create };