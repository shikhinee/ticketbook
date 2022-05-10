//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './ConcertCard.module.scss'

const ConcertCard = (props) => {
	 return (
		 <div className={styles.container}>
			<div className={styles.content}>
				<span className={styles.ariunaa}>ARIUNAA'S</span>
				<span className={styles.special}>SPECIAL</span>
				<span className={styles.live}>LIVE CONCERT 2022</span>
				<span className={styles.white}>WHITE</span>
				<span className={styles.white}>HILL</span>
				<span className={styles.dressCode}>DRESS CODE | WHITE</span>
				<span className={styles.location}>ZAISAN HILL COMPLEX. 3<sup>RD</sup> FLOOR</span>
				<span className={styles.location}>Z'TERRA TERRACE AND RESTAURANT</span>

			</div>
		</div>
	)
};

export default ConcertCard;
