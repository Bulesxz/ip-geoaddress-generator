import axios from "axios";

export interface IPResponse {
  ip: string;
}

class IPService {
  async fetchIP(): Promise<IPResponse> {
    const response = await axios.get<IPResponse>(
      "/api/ip?format=json"
    );
    return response.data;
  }
}

export const ipService = new IPService();
