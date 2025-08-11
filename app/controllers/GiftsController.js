import { GiftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    console.log('GiftsController');
    this.getGifts();
  }

  async getGifts() {
    try {
      await GiftsService.getGifts();
    } catch (error) {
      Pop.toast("Could not get gifts", error);
    }
  }

}