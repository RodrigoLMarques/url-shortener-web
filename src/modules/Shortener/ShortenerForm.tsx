import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Alert from "../../components/UI/Alert";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import { FEATURES, SUCCESS_MESSAGES, VALIDATION } from "../../constants";
import { useShortenUrl } from "../../queries/urlQueries";
import type { ShortUrlRequest } from "../../types";

const schema = yup.object({
  originalUrl: yup
    .string()
    .required("URL é obrigatória")
    .matches(VALIDATION.URL.pattern, VALIDATION.URL.message),
});

const ShortenerForm: React.FC = () => {
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const shortenUrlMutation = useShortenUrl();

  const onSubmit = async (data: ShortUrlRequest) => {
    try {
      const result = await shortenUrlMutation.mutateAsync(data);
      setShortenedUrl(result.shortUrl);
      setShowSuccess(true);
      reset();
    } catch (error) {
      console.error("Erro ao encurtar URL:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
    } catch (error) {
      console.error("Erro ao copiar URL:", error);
    }
  };

  return (
    <Card
      title={FEATURES.SHORTENER.title}
      subtitle={FEATURES.SHORTENER.subtitle}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="url"
            placeholder={FEATURES.SHORTENER.placeholder}
            {...register("originalUrl")}
            error={errors.originalUrl?.message}
          />
        </div>

        <Button
          type="submit"
          loading={shortenUrlMutation.isPending}
          disabled={shortenUrlMutation.isPending}
          className="w-full"
        >
          {FEATURES.SHORTENER.buttonText}
        </Button>
      </form>

      {shortenUrlMutation.error && (
        <Alert type="error" className="mt-4">
          {shortenUrlMutation.error.message}
        </Alert>
      )}

      {showSuccess && shortenedUrl && (
        <Alert type="success" className="mt-4">
          <div className="space-y-3">
            <p>{SUCCESS_MESSAGES.URL_SHORTENED}</p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={shortenedUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              />
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                Copiar
              </Button>
            </div>
          </div>
        </Alert>
      )}
    </Card>
  );
};

export default ShortenerForm;
