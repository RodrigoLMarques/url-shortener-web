import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants";
import { urlService } from "../services/urlService";
import type { ShortUrlRequest, UnshortenUrlRequest } from "../types";

export const useShortenUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ShortUrlRequest) => urlService.shortenUrl(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SHORTEN_URL] });
    },
  });
};

export const useClickStats = (shortUrl: string, enabled: boolean = false) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CLICK_STATS, shortUrl],
    queryFn: () => urlService.getClickStats({ shortUrl }),
    enabled: enabled && !!shortUrl,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export const useUnshortenUrl = () => {
  return useMutation({
    mutationFn: (data: UnshortenUrlRequest) => urlService.unshortenUrl(data),
  });
};

export const useUrlByAlias = (alias: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SHORTEN_URL, alias],
    queryFn: () => urlService.getUrlByAlias(alias),
    enabled: enabled && !!alias,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
