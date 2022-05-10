//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './ConcertInfo.module.scss'

const ConcertInfo = (props) => {
	 return (
		 <div className={styles.container}>
			<div className={styles.content}>
				<span className={styles.ariunaa}>ARIUNAA&apos;S SPECIAL</span>
				<span className={styles.live}>LIVE CONCERT 2022</span>
				<span className={styles.white}>WHITE HILL</span>
				<span className={styles.location}>FRI | 03 | JUN | AT SIX O&apos;CLOCK</span>
				<span className={styles.menu}>DINNER MENU</span>
				<span className={styles.food}>LOCAL BEEF STEAK WITH POTATO, GRILLED ASPARAGUS AND MUSHROOM SAUCE</span>
				<span className={styles.food}>GREEN GARDEN SALAD | BLUEBERRY MOUSSE CAKE | GLASS OF RED WINE</span>
				<span className={styles.food}>MINERAL WATER</span>

			</div>
		</div>
	)
};

export default ConcertInfo;
