import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
  constructor() {
    console.log('GiftsController');
    AppState.on('account', this.getGifts);
    AppState.on('gifts', this.drawGifts);
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (error) {
      Pop.toast("Could not get gifts", 'error');
      console.log(error);
    }
  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId);
    } catch (error) {
      Pop.toast("Could not open gift", 'error');
      console.log(error);
    }
  }

  async createGift(event) {
    event.preventDefault();
    try {
      await giftsService.createGift(event);
    } catch (error) {
      Pop.toast("Could not create gift", 'error');
      console.log(error);
    }
  }

  drawGifts() {
    let giftsHTML = "";
    AppState.gifts.forEach(gift => {
      giftsHTML += gift.giftTemplate;
    });
    setHTML('gifts', giftsHTML);
  }

}