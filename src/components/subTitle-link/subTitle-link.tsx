import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ExternalLinkIcon, CopyIcon } from "src/icons";
import styles from "./subTitle-link.module.css";

interface SubTitleLinkProps {
  text: string;
  icon: "OpenExternalLink" | "Copy";
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const SubTitleLink = ({
  text,
  icon,
  linkProps,
  buttonProps,
}: SubTitleLinkProps) => {
  const IconComponent = {
    OpenExternalLink: (
      <a {...linkProps}>
        <ExternalLinkIcon className={styles.icon} />
      </a>
    ),
    Copy: (
      <button {...buttonProps}>
        <CopyIcon className={styles.icon} />
      </button>
    ),
  };

  return (
    <p className={styles.contactInfo}>
      <samp className={styles.contactInfoTitule}>{text}</samp>
      {IconComponent[icon]}
    </p>
  );
};
