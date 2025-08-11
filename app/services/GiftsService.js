import { api } from "./AxiosService.js";

export class GiftsService {
  async getGifts() {
    const response = await api.get('api/account');

    console.log('getGifts');
    console.log(response);
  }
}


export const giftsService = new GiftsService();