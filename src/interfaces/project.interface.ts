import { QueryResult } from "pg";

interface project {
  id: number;
  name: string;
  description?: string | null | undefined;
  repository: string;
  startDate: Date;
  endDate?: Date | null | undefined;
  developerId?: number | null | undefined;
}

type projectCreate = Omit<project, "id">;
type projectUpdate = Partial<projectCreate>;
type projectResult = QueryResult<project>;

export { project, projectCreate, projectUpdate, projectResult };