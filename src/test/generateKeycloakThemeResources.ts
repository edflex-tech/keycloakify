
import { join as pathJoin } from "path";
import { generateKeycloakThemeResources } from "../bin/generateKeycloakThemeResources";
import { setupSampleReactProject } from "./setupSampleReactProject";

const { sampleReactProjectDirPath } = setupSampleReactProject();

generateKeycloakThemeResources({
    "themeName": "onyxia-ui",
    "reactAppBuildDirPath": pathJoin(sampleReactProjectDirPath, "build"),
    "keycloakThemeBuildingDirPath": pathJoin(sampleReactProjectDirPath, "build_keycloak_theme")
});
