import { Alert, TitleSection, ExperienceTimeLine, Skills, ButtonLink } from 'src/components';
import styles from './home.module.css';
import { SkillsList } from 'src/constants';
import { copy } from 'src/utils';
import { useAlert } from 'src/hooks';

export const Home = () => {
  const { show } = useAlert();

  const copyOnClick = () =>
    copy({ newClip: 'contactojesusenriqueul@gmail.com', onSuccessCallBack: show });

  return (
    <div id="pageWrapper" className={styles.pageWrapper}>
      <header className={styles.header}>
        <section>
          <h1 className={styles.mainHeading}>Jesus Enrique Uribe Lopez</h1>
          <h2 className={styles.subHeading}>Software Engineer - JavaScript/TypeScript</h2>
          <h4 className={styles.skillsDescription}>
            Specializing in React.js, Next.js, Tailwind CSS, and the MERN Stack.
          </h4>
        </section>
      </header>
      <section className={styles.pageSectionWrapper}>
        <TitleSection tag="h3" title="Skills" />
        <Skills skills={SkillsList} />
      </section>
      <section className={styles.pageSectionWrapper}>
        <TitleSection tag="h3" title="Contact Information" />
        <div className={styles.contactInfo}>
          <ButtonLink
            type="btn"
            leftIcon="email"
            rightIcon="copy"
            text="contactojesusenriqueul@gmail.com"
            buttonProps={{ onClick: copyOnClick }}
          />
          <ButtonLink
            type="link"
            leftIcon="linkedin"
            rightIcon="link"
            text="linkedin.com/in/jesus-enrique-ul"
            anchorProps={{
              target: '_blank',
              href: 'https://www.linkedin.com/in/jesus-enrique-ul',
            }}
          />

          <ButtonLink
            type="link"
            leftIcon="git"
            rightIcon="link"
            text="github.com/SAW1518"
            anchorProps={{
              target: '_blank',
              href: 'https://github.com/SAW1518',
            }}
          />
        </div>
        {/* <SubTitleLink
          text="Email: contactojesusenriqueul@gmail.com"
          icon="Copy"
          buttonProps={{ onClick: copyOnClick }}
        />
        <SubTitleLink
          text="LinkedIn: linkedin.com/in/jesus-enrique-ul"
          icon="OpenExternalLink"
          linkProps={{
            target: '_blank',
            href: 'https://www.linkedin.com/in/jesus-enrique-ul',
          }}
        />
        <SubTitleLink
          text="GitHub: github.com/SAW1518"
          icon="OpenExternalLink"
          linkProps={{
            target: '_blank',
            href: 'https://github.com/SAW1518',
          }}
        /> */}
      </section>
      <section className={styles.pageSectionWrapper}>
        <TitleSection tag="h3" title="Experience" />
        <ExperienceTimeLine />
      </section>
      <Alert />
    </div>
  );
};
