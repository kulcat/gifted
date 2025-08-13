import { GiftsController } from "../controllers/GiftsController.js";


export class Gift {
  constructor(data) {
    this.id = data._id;
    this.tag = data.tag;
    this.url = data.url;
    this.opened = data.opened;
  }

  async getGifts() {
    await giftsService.getGifts();
  }

  get giftTemplate() {
    return /*html*/ `
      <div class="card d-flex flex-column" style="width: 30%;" onclick="app.GiftsController.openGift('${this.id}')">
        <img class="card-img" style="object-fit: contain;"  src='${this.url}'>
        <div class="card-body d-flex flex-column align-items-center">
          <span>${this.tag}</span>
        </div>
      </div>
    `
  }
}