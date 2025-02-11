import i18next from 'i18next';
import { format, diffMonths } from '@formkit/tempo';

interface copyProps {
  newClip: string;
  onSuccessCallBack?: () => void;
  onErrorCallBack?: () => void;
}

export const copy = ({ newClip, onSuccessCallBack, onErrorCallBack }: copyProps) => {
  navigator.clipboard
    .writeText(newClip)
    .then(() => {
      onSuccessCallBack?.();
    })
    .catch(() => {
      onErrorCallBack?.();
    });
};

export const getCurrentLanguage = () => {
  return i18next?.languages[i18next?.languages?.length - 1];
};

export const calculateDate = ({
  date,
  lang,
}: {
  date: { initDate: Date; endDate: Date };
  lang: string;
}) => {
  const { initDate, endDate } = date;

  return `${format(initDate, 'MMM. YYYY', lang)} - ${format(endDate, 'MMM. YYYY', lang)} · ${diffMonths(endDate, initDate)}`;
};
