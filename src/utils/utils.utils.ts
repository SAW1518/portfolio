import i18next from 'i18next';

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
  return i18next.languages[i18next.languages.length - 1];
};
