import { AppState } from "../AppState.js";
import { GiftsController } from "../controllers/GiftsController.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

export class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts');

    console.log('getGifts');

    response.data.forEach(giftData => {
      AppState.gifts.push(new Gift(giftData));
    });
  }

  async openGift(giftId) {
    const openedGift = AppState.gifts.find(gift => giftId === gift.id);
    if (!openedGift.opened) {
      openedGift.opened = true;
      console.log("opened gift");

      const response = await api.put(`api/gifts/${giftId}`, openedGift);
    }
  }

  // broken
  async createGift(event) {
    const formData = new FormData(event.target);
    const tag = formData.get('tag');
    const url = formData.get('url');

    const data = [tag, url];

    const newGift = new Gift(data);
    console.log(newGift);
    AppState.gifts.push(newGift);

    const response = await api.post(`api/gifts`, newGift);
    console.log(response);
  }
}


export const giftsService = new GiftsService();