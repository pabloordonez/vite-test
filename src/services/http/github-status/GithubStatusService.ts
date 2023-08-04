import { ApiClient, apiClientInstance } from "../ApiClient";
import { Summary, Incidents, PageStatus } from "./models/incidents";

class GithubStatusService {
  constructor(private readonly apiClient: ApiClient) {}

  async getSummary(): Promise<Summary> {
    return await this.apiClient.get("summary.json");
  }

  async getStatus(): Promise<PageStatus> {
    return await this.apiClient.get("status.json");
  }

  async getIncidents(): Promise<Incidents> {
    return await this.apiClient.get("incidents.json");
  }
}

export const githubStatusServiceInstance = new GithubStatusService(
  apiClientInstance
);
