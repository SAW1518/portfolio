import styles from "./skills.module.css";

export interface SkillsProps {
  skills?: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className={styles.skillsGrid}>
      {skills?.map((item) => (
        <p key={item.toString()} className={styles.skillItem}>
          <span>{item}</span>
        </p>
      ))}
    </div>
  );
};
