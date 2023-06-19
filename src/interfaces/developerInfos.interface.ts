import { QueryResult } from "pg";

type TPreferredOSType = "Windows" | "Linux" | "MacOS";

interface developerInfos {
    id: number;
    developerSince: Date;
    preferredOS: TPreferredOSType;
    developerId: number;
}

type developerInfosCreate = Omit<developerInfos, "id">;
type developerInfosResult = QueryResult<developerInfos>;

export { developerInfos, developerInfosCreate, developerInfosResult, TPreferredOSType };