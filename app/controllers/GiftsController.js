import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    console.log('GiftsController');
    this.getGifts();
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (error) {
      Pop.toast("Could not get gifts", error);
      console.log(error);
    }
  }

}