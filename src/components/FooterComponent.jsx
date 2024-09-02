import styles from "./FooterComponent.module.css";

//later add the github link to your profile and github svg/image

function FooterComponent() {
  return (
    <footer data-testid="footer" className={styles.footerContainer}></footer>
  );
}

export default FooterComponent;
