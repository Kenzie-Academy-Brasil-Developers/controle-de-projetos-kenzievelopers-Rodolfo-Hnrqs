import format from "pg-format";
import { developer, developerCreate, developerUpdate, developerResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: developerCreate): Promise<developer> => {

    const queryFormat: string = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: developerResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (developerId: string): Promise<developer> => {
    const query: developerResult = await client.query(
        `
            SELECT
                "d"."id" AS "developerId",
                "d"."name" AS "developerName",
                "d"."email" AS "developerEmail",
                "i"."developerSince" AS "developerInfoDeveloperSince",
                "i"."preferredOS" AS "developerInfoPreferredOS"
            FROM "developers" AS "d"
            LEFT JOIN "developerInfos" AS "i"
                ON "d"."id" = "i"."developerId"
            WHERE "d"."id" = $1;
        `
        ,
        [developerId]
    );

    return query.rows[0];
};

const update = async (payload: developerUpdate, developerId: string): Promise<developer> => {
    const queryFormat: string = format(
        'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: developerResult = await client.query(queryFormat, [developerId]);
    return query.rows[0];
};

const destroy = async (developerId: string): Promise<void> => {
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId]);
};

export default { create, retrieve, destroy, update };