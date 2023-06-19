import format from "pg-format";
import { project, projectCreate, projectResult, projectUpdate } from "../interfaces";
import { client } from "../database";

const create = async (payload: projectCreate): Promise<project> => {
    const queryFormat: string = format(
        'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: projectResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (projectId: string): Promise<project> => {
    const queryTemplate: string = `
      SELECT
        "p"."id" AS "projectId",
        "p"."name" AS "projectName",
        "p"."description" AS "projectDescription",
        "p"."repository" AS "projectRepository",
        "p"."startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "d"."id" AS "developerId",
        "d"."name" AS "projectDeveloperName"
      FROM "projects" AS "p"
      LEFT JOIN "developers" AS "d"
        ON "d"."id" = "p"."developerId"
      WHERE "p"."id" = $1;
    `;

    const query: projectResult = await client.query(queryTemplate, [projectId]);
    return query.rows[0];
};

const update = async (payload: projectUpdate, projectId: string): Promise<project> => {
    const queryFormat: string = format(
        'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: projectResult = await client.query(queryFormat, [projectId]);
    return query.rows[0];
};

export default { create, update, retrieve };