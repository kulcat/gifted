import { AppState } from "../AppState.js";
import { giphyService } from "../services/GiphyService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiphyController {
  constructor() {
    AppState.on('gifUrls', this.drawGifs);
  }

  async search(event) {
    event.preventDefault();
    try {
      await giphyService.search(event);
    } catch (error) {
      Pop.toast("Could not get gifts", 'error');
      console.log(error);
    }
  }

  drawGifs() {
    let output = "";
    AppState.gifUrls.forEach(url => {
      console.log(url);
      output += /* html */ `
      <div class="card w-50">
        <img class="card-img" src="${url}" style="object-fit: contain;" onclick="app.GiphyController.addGif('${url}')">
      </div>
      `;
    })
    setHTML('gifs', output);
  }

  addGif(url) {
    document.getElementById('giftUrl').value = url;
  }
}

