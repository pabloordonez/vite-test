import { HttpClient, ContentTypeInterceptor, AuthorizationInterceptor, QueryString } from "@miracledevs/paradigm-web-fetch";

export class ApiClient
{
    private readonly baseUrl: string | undefined;
    private readonly httpClient: HttpClient;
    constructor()
    {
        this.baseUrl = import.meta.env.VITE_MY_APP_API_URL;
        this.httpClient = new HttpClient();
        this.httpClient.registerInterceptor(new ContentTypeInterceptor('application/json'));
    }

    authorize(token: string): void
    {
        this.httpClient.registerInterceptor(new AuthorizationInterceptor(token));
    }

    async get<TResult>(url: string, queryString?: QueryString): Promise<TResult>
    {
        return (await (await this.httpClient.get(`${this.baseUrl}/${url}`, queryString)).json()) as TResult;
    }

    async post<TResult>(url: string, queryString?: QueryString, body?: BodyInit): Promise<TResult>
    {
        return (await (await this.httpClient.post(`${this.baseUrl}/${url}`, queryString, body)).json()) as TResult;
    }

    async put<TResult>(url: string, queryString?: QueryString, body?: BodyInit): Promise<TResult>
    {
        return (await (await this.httpClient.put(`${this.baseUrl}/${url}`, queryString, body)).json()) as TResult;
    }

    async patch<TResult>(url: string, queryString?: QueryString, body?: BodyInit): Promise<TResult>
    {
        return (await (await this.httpClient.patch(`${this.baseUrl}/${url}`, queryString, body)).json()) as TResult;
    }

    async delete<TResult>(url: string, queryString?: QueryString): Promise<TResult>
    {
        return (await (await this.httpClient.delete(`${this.baseUrl}/${url}`, queryString)).json()) as TResult;
    }
}

// This should be created using dependency injection
// but we are exposing a singleton instance to explain the
// concepts easily for students.
export const apiClientInstance = new ApiClient();
