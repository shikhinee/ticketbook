//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import ProductReq from '@/components/ProductReq';
import ConcertCard from '@/components/ConcertCard';
import ConcertInfo from '@/components/ConcertInfo';
import styles from './Main.module.scss'

const Main = (props) => {
	 return (
		 <div className={styles.container}>
			 <ConcertCard />
			 <ConcertInfo />
			<ProductReq/>
		</div>
	)
};

export default Main;
