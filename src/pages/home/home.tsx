import { TitleSection } from "src/components";
import styles from "./home.module.css";
import { Skills } from "src/constants";
import { LinkedinIcon, MailboxIcon, GithubIcon } from "src/icons";

export const Home = () => {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <section>
                    <h1 className={styles.mainHeading}>Jesus Enrique Uribe Lopez</h1>
                    <h2 className={styles.subHeading}>Software Engineer - JavaScript/TypeScript</h2>
                    <h4 className={styles.skillsDescription}>
                        Specializing in React.js, Next.js, Tailwind CSS, and the MERN Stack.
                    </h4>
                </section>
                <div className={styles.socialLinksWrapper}>
                    <section aria-description="social links" className={styles.socialLinks}>
                        <a target="_blank" href="https://www.linkedin.com/in/jesus-enrique-ul">
                            <LinkedinIcon className={styles.icon} />
                        </a>
                        <a target="_blank" href="mailto:contactojesusenriqueul@gmail.com">
                            <MailboxIcon className={styles.icon} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/jesus-enrique-uribe-lopez-486584228/?locale=en_US">
                            <GithubIcon className={styles.icon} />
                        </a>
                    </section>
                </div>
            </header>
            <section className={styles.pageSectionWrapper}>
                {/* <h3 className={styles.sectionTitle}>Skills</h3> */}
                <TitleSection tag="h3" title="Skills" />
                <div className={styles.skillsGrid}>
                    {Skills.map((item) => (
                        <p key={item.toString()} className={styles.skillItem}>
                            <span>{item}</span>
                        </p>
                    ))}
                </div>
            </section>
            <section className={styles.pageSectionWrapper}>
                <TitleSection tag="h3" title="Contact Informatio" />
                <h4 className={styles.contactInfo}>Email: contactojesusenriqueul@gmail.com</h4>
                <h4 className={styles.contactInfo}>LinkedIn: linkedin.com/in/jesus-enrique-ul</h4>
                <h4 className={styles.contactInfo}>GitHub: github.com/johndoe</h4>
            </section>
        </div>
    );
};
