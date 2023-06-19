import { QueryResult } from "pg";

interface developer {
    id: number;
    name: string;
    email: string;
}

type developerCreate = Omit<developer, "id">;
type developerUpdate = Partial<developerCreate>;
type developerResult = QueryResult<developer>;

export { developer, developerCreate, developerUpdate, developerResult };