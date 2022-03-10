import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name='keyword' content='ninjas' />
			</Head>
			<div>
				<h1 className={styles.title}>HomePage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
					provident a omnis voluptatum tenetur quibusdam ut! Minus repellendus,
					laudantium hic numquam minima beatae cumque saepe eligendi eveniet
					libero reprehenderit ipsum?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
					provident a omnis voluptatum tenetur quibusdam ut! Minus repellendus,
					laudantium hic numquam minima beatae cumque saepe eligendi eveniet
					libero reprehenderit ipsum?
				</p>
				<Link href='/ninjas'>
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
