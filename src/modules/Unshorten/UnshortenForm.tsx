import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUnshortenUrl } from '../../queries/urlQueries';
import { FEATURES, VALIDATION, SUCCESS_MESSAGES } from '../../constants';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Alert from '../../components/UI/Alert';
import Card from '../../components/UI/Card';
import type { UnshortenUrlRequest } from '../../types';

const schema = yup.object({
  shortUrl: yup
    .string()
    .required('URL encurtada é obrigatória')
    .matches(VALIDATION.SHORT_URL.pattern, VALIDATION.SHORT_URL.message),
});

const UnshortenForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const unshortenUrlMutation = useUnshortenUrl();
  
  const onSubmit = async (data: UnshortenUrlRequest) => {
    try {
      const result = await unshortenUrlMutation.mutateAsync(data);
      setOriginalUrl(result.originalUrl);
      setShowResult(true);
      reset();
    } catch (error) {
      console.error('Erro ao desencurtar URL:', error);
    }
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(originalUrl);
    } catch (error) {
      console.error('Erro ao copiar URL:', error);
    }
  };
  
  const openUrl = () => {
    window.open(originalUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Card
      title={FEATURES.UNSHORTEN.title}
      subtitle={FEATURES.UNSHORTEN.subtitle}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="url"
            placeholder={FEATURES.UNSHORTEN.placeholder}
            {...register('shortUrl')}
            error={errors.shortUrl?.message}
          />
        </div>
        
        <Button
          type="submit"
          loading={unshortenUrlMutation.isPending}
          disabled={unshortenUrlMutation.isPending}
          className="w-full"
        >
          {FEATURES.UNSHORTEN.buttonText}
        </Button>
      </form>
      
      {unshortenUrlMutation.error && (
        <Alert type="error" className="mt-4">
          {unshortenUrlMutation.error.message}
        </Alert>
      )}
      
      {showResult && originalUrl && (
        <Alert type="success" className="mt-4">
          <div className="space-y-3">
            <p>{SUCCESS_MESSAGES.URL_UNSHORTENED}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">URL Original:</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={originalUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm break-all"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                >
                  Copiar
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={openUrl}
                >
                  Abrir
                </Button>
              </div>
            </div>
          </div>
        </Alert>
      )}
    </Card>
  );
};

export default UnshortenForm;
