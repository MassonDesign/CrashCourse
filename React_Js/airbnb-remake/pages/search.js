import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
	const router = useRouter();
	// ES6 deconstruction
	const { location, startDate, endDate, noOfGuest } = router.query;

	const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
	const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<div className="">
			<Header placeholder={`${location} | ${range} | ${noOfGuest}`} />

			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ Stays - {range} - for {noOfGuest} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						Stays in {location}
					</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						{/* Button = tailwind custom utility classe */}
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>

					<div className="flex flex-col">
						{searchResults.map(
							({ img, location, title, description, star, price, total }) => (
								<InfoCard
									key={img} // key should be a unique identifier. ideal would be ID attribute
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							),
						)}
					</div>
				</section>

				<section className="hidden xl:inline-flex xl:min-w-[600px]">
					<Map searchResults={searchResults} />
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch("https://links.papareact.com/isz").then(
		(res) => res.json(),
	);

	return {
		props: {
			searchResults,
		},
	};
}
