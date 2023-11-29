import Image from "next/image";
import styles from '../styles.module.css'

const Disclaimer = () => {


  return (
    <main className={`${styles.main} ${styles.justifyunset}`}>
      <div className={styles.description}>
        <p>
          <a style={{padding: '1rem'}} href="/"><b>&lt; Home</b></a>
        </p>
        
        <h1 style={{padding: '1rem'}}>Disclaimer</h1>
      </div>

      <div className={styles.center}>
        <div className={styles.description}>
          The information provided in the videos of Technapper is for general informational purposes only and should not be construed as professional advice. While we strive to provide accurate and up-to-date information, we cannot guarantee the correctness of all information presented.
          <br />
          <br />
          We encourage viewers to conduct their own research before making any decisions based on the information presented on this channel. We also recommend consulting with a qualified professional before making any major purchases or investments.
          <br />
          <br />
          Technapper does not take responsibility for any actions taken or decisions made based on the information presented on this channel.
          <br />
          <br />
          Thanks for stopping by!
          <br />
          <br />
          Please subscribe to stay updated with the latest tech news.
          <br />
          <br />
          <br />
          <br />
          - Team Technapper.
        </div>
      </div>
    </main>
  )
}

export default Disclaimer;