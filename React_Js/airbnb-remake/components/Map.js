import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
import Image from "next/image";

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});
	// transform searchResults object into lat/long objects
	// { latitude: 52.518611, longitude: 13.408056 } objects

	const coordinates = searchResults.map((result) => ({
		latitude: result.lat,
		longitude: result.long,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/fmreact/cktwvekbj0y5u17rlmpcpj62x'
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							onClick={() => setSelectedLocation(result)}
							className='cursor-pointer bg-white rounded-full text-black p-2 font-semibold text-xs shadow-sm hover:scale-110 transform transition duration-300 ease-out'
							aria-label='push-pin'
						>
							{result.total}
						</p>
					</Marker>

					{/* Pop Up if click on marker */}
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}
							maxWidth='none'
							className=''
							closeButton={false}
						>
							{/* <div className='flex flex-col w-56 justify-center items-center bg-red-800'>
								<div className='relative h-12 w-20 md:h-36 md:w-full '>
									<Image
										src={result.img}
										layout='fill'
										objectFit='cover'
										className='rounded-2xl'
									/>
								</div>
								
							</div> */}
							<p className='p-0'>{result.title}</p>
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default Map;
