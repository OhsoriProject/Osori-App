import { BASE_URL } from "@env";

let ROOT_URL = "http://localhost:8000";
ROOT_URL = BASE_URL || "http://localhost:8000";
export { ROOT_URL };
