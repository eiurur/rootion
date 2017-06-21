import MathHelper from "./MathHelper";

export default class RandomComic {
  constructor(tab) {
    this.tab = tab;
    this.COMIC_TOTAL_NUM = 2000; // TODO: 動的取得
    this.COMIC_PAGE_URL = "https://komiflo.com/comics";
    return this;
  }

  getPageUrl(comicId) {
    return `${this.COMIC_PAGE_URL}/${comicId}/read`;
  }

  open() {
    const url = this.getPageUrl(MathHelper.getRandom(this.COMIC_TOTAL_NUM));
    chrome.tabs.update(this.tab.id, { url });
  }
}
