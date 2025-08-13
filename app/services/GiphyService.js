import { AppState } from "../AppState.js";
import { giphyApiKey } from "../env.js";

export const giphyApi = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs",
  timeout: 8000,
  params: {
    api_key: giphyApiKey,
    rating: "pg",
    limit: 10,
  },
});


export class GiphyService {
  async search(event) {
    const formData = new FormData(event.target);
    const query = formData.get('search');

    const res = await giphyApi.get('search', {
      params: {
        q: query
      }
    });

    console.log(res);
    AppState.gifUrls = [];
    res.data.data.forEach(data => {
      console.log(data.images.downsized_large.url);
      AppState.gifUrls.push(data.images.downsized_large.url);
    });
  }
}


export const giphyService = new GiphyService();