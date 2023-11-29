import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.wrapper}>
            <a className={styles.link} href='https://www.youtube.com/@technapper'>
              <div>
                <img className={styles.icon} height='auto' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_Ei-qn7tobFGsZrmXV2nH8Nm4P83Mh-HSNgi59swD8vrHd8I3aXveclC7515swxbh27kixrDMk4WMb7TeBbixAvVuU9eQaNtzZAOzHLmk2e2QqUwFVzjJpLhsvuhOGztZEUmH6QcR2M6akDVp0c4oRqNoNVs-51_hL3olR0kiRYp-tsQLNSbULlGau8zr/s320/youtube%20icon.png' width='40px'/>
                <span><span className={styles.grey}>/ @</span><b>tech</b><span className={styles.grey}>napper</span></span>
              </div>
            </a>
        </div>
      </div>

      <div>
        <a
          href="/disclaimer" className={styles.card}
        >
          <code>Disclaimer</code>
        </a>
      </div>
    </main>
  );
}
