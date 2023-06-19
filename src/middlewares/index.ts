import handleError from "./handleError.middleware";
import verifyEmail from "./emailVerify.middleware";
import verifyDeveloperId from "./developerVerifyId.middleware";
import verifyDeveloperInfosExists from "./infosVerify.middleware";
import verifyOS from "./verifyOS.middleware";
import verifyDeveloperIdBody from "./verifyBodyId.middleware";
import verifyProjectIdParams from "./verifyIdParams.middleware";

export default { handleError, verifyEmail, verifyDeveloperId, verifyDeveloperInfosExists, verifyOS, verifyDeveloperIdBody, verifyProjectIdParams };