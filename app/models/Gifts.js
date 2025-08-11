

export class Gifts {
  constructor(data) {

  }

  async getGifts() {
    await giftsService.getGifts();
  }
}