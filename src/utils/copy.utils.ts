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
