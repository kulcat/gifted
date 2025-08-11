
export class GiftsService {
  async getGifts() {
    const response = await fetch();
    console.log('getGifts');
  }
}


export const giftsService = new GiftsService();