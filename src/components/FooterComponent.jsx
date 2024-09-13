import styles from "./FooterComponent.module.css";

//later add the github link to your profile and github svg/image

function FooterComponent() {
  return (
    <footer data-testid="footer" className={styles.footerContainer}>
      <ul>
        <li className={styles.footerLiContainer}>
          <a
            href="https://github.com/Preslav977/where-is-everyone-frontend"
            target="_blank"
          >
            <img
              className={styles.footerImage}
              src="github.svg"
              alt="Github profile"
            />
            Preslaw
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default FooterComponent;
