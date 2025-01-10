import {
  CopyIcon,
  ExternalLinkIcon,
  MailboxIcon,
  LinkedinIcon,
  GithubIcon,
  PhoneIcon,
} from 'src/icons';
import styles from './button-link.module.css';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';

type IconType = 'email' | 'copy' | 'linkedin' | 'link' | 'git' | 'phone';

const Wrappers: Record<'btn' | 'link', 'button' | 'a'> = {
  btn: 'button',
  link: 'a',
};

const Icon: Record<IconType, JSX.Element | null> = {
  email: <MailboxIcon className={styles.icon} />,
  copy: <CopyIcon className={styles.icon} />,
  link: <ExternalLinkIcon className={styles.icon} />,
  linkedin: <LinkedinIcon className={styles.icon} />,
  git: <GithubIcon className={styles.icon} />,
  phone: <PhoneIcon className={styles.icon} />,
};
export interface ButtonLinkProps {
  text: string;
  rightIcon?: IconType;
  type: 'btn' | 'link';
  leftIcon?: IconType;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const ButtonLink = ({
  text,
  rightIcon,
  leftIcon,
  type,
  buttonProps,
  anchorProps,
}: ButtonLinkProps) => {
  const Wrapper = Wrappers[type];
  const props = type === 'btn' ? buttonProps : anchorProps;
  const customStyle = type === 'btn' ? styles.contactButton : styles.contactLink;

  return (
    <Wrapper className={customStyle} {...(props as HTMLAttributes<HTMLElement>)}>
      {leftIcon && Icon[leftIcon]}
      {text}
      {rightIcon && Icon[rightIcon]}
    </Wrapper>
  );
};
