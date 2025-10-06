import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Alert from "../../components/UI/Alert";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import { FEATURES, VALIDATION } from "../../constants";
import { useClickStats } from "../../queries/urlQueries";

const schema = yup.object({
  shortUrl: yup
    .string()
    .required("URL encurtada é obrigatória")
    .matches(VALIDATION.SHORT_URL.pattern, VALIDATION.SHORT_URL.message),
});

const CounterForm: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [showStats, setShowStats] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    data: stats,
    isLoading,
    error,
    refetch,
  } = useClickStats(shortUrl, showStats && !!shortUrl);

  const onSubmit = async (data: { shortUrl: string }) => {
    setShortUrl(data.shortUrl);
    setShowStats(true);
    refetch();
  };

  return (
    <Card title={FEATURES.COUNTER.title} subtitle={FEATURES.COUNTER.subtitle}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="url"
            placeholder={FEATURES.COUNTER.placeholder}
            {...register("shortUrl")}
            error={errors.shortUrl?.message}
          />
        </div>

        <Button type="submit" className="w-full">
          {FEATURES.COUNTER.buttonText}
        </Button>
      </form>

      {error && (
        <Alert type="error" className="mt-4">
          {error.message}
        </Alert>
      )}

      {isLoading && showStats && (
        <div className="mt-4 flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <span className="ml-2 text-gray-600">Carregando estatísticas...</span>
        </div>
      )}

      {stats && !isLoading && (
        <div className="mt-6 space-y-4">
          <Alert type="success">
            <h3 className="font-semibold mb-2">Estatísticas da URL</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">URL Original:</p>
                <p className="font-medium break-all">{stats.originalUrl}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">URL Encurtada:</p>
                <p className="font-medium break-all">{stats.shortUrl}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Alias:</p>
                <p className="font-medium">{stats.alias}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Domínio:</p>
                <p className="font-medium">{stats.domain}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Cliques:</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.clicks}
                </p>
              </div>
            </div>
          </Alert>
        </div>
      )}
    </Card>
  );
};

export default CounterForm;
