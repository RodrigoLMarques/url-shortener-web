import { apiRequest } from "../lib/axios";
import type {
  ClickStatsRequest,
  ShortUrlRequest,
  UnshortenUrlRequest,
  UrlPresenter,
} from "../types";

export const urlService = {
  async shortenUrl(data: ShortUrlRequest): Promise<UrlPresenter> {
    const response = await apiRequest<UrlPresenter>({
      method: "POST",
      url: "/urls",
      data,
    });

    console.log(response);
    return response;
  },

  async getClickStats(data: ClickStatsRequest): Promise<UrlPresenter> {
    const alias = data.shortUrl.split("/").pop();
    return apiRequest<UrlPresenter>({
      method: "GET",
      url: `/urls/${alias}`,
    });
  },

  async unshortenUrl(data: UnshortenUrlRequest): Promise<UrlPresenter> {
    const alias = data.shortUrl.split("/").pop();
    return apiRequest<UrlPresenter>({
      method: "GET",
      url: `/urls/${alias}`,
    });
  },

  async getUrlByAlias(alias: string): Promise<UrlPresenter> {
    return apiRequest<UrlPresenter>({
      method: "GET",
      url: `/urls/${alias}`,
    });
  },
};
