import { H2, TextProse, XlWrapper } from "@src/atoms";
import { Modal, RatingInput } from "@src/molecules";
import { ContactBusinessForm, DetailCard, RatingList } from "@src/organisms";
import snarkdown from "snarkdown";
import { useState, useEffect } from "react";

export function BusinessProfileTemplate({ BusinessProfileData }) {
	const article = snarkdown(BusinessProfileData.article);
	const [ratingList, setRatingList] = useState(
		BusinessProfileData.ratingList.sort((a, b) => {
			return new Date(b.submitedAt) - new Date(a.submitedAt);
		}),
	);
	const [contactModal, setContactModal] = useState(false);

	useEffect(() => {
		if (contactModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [contactModal]);

	const [rating, setRating] = useState(0);

	useEffect(() => {
		const ratings = ratingList.map((rating) => rating.rating);
		const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
		const roundedAverageRating = Math.round(averageRating);
		setRating(roundedAverageRating);
	}, [ratingList]);

	const closeContactModal = () => {
		setContactModal(false);
	};
	const openContactModal = () => {
		setContactModal(true);
	};

	const addRating = (ratingItem) => {
		setRatingList([ratingItem, ...ratingList]);
	};

	return (
		<>
			<section>
				<div>
					<img
						className="h-32 w-full object-cover lg:h-48"
						src="https://source.unsplash.com/random/?workout"
						alt=""
					/>
				</div>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
						<div className="flex">
							<img
								className="h-24 w-24 rounded-full object-contain ring-4 ring-white sm:h-32 sm:w-32"
								src="https://source.unsplash.com/random/128x128/?avatar"
								alt=""
							/>
						</div>
						<div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
							<div className="sm:hidden md:block mt-6 min-w-0 flex-1">
								<span className="text-xs text-gray-400">@{BusinessProfileData.username}</span>
								<h1 className="text-2xl font-bold text-gray-900 truncate">
									{BusinessProfileData.name}
								</h1>
							</div>
							<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
								<button
									type="button"
									onClick={openContactModal}
									className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
								>
									<svg
										className="-ml-1 mr-2 h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<span>Napsat zprávu</span>
								</button>
								{/* <button
									type="button"
									className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
								>
									<svg
										className="-ml-1 mr-2 h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									<span>Přidat do oblíbených</span>
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-16 relative">
				<XlWrapper>
					<div className="flex">
						<div className="relative flex-grow bg-white overflow-hidden">
							<div className="relative px-4 sm:px-6 lg:px-8">
								<TextProse>
									<div dangerouslySetInnerHTML={{ __html: article }}></div>
								</TextProse>
							</div>
						</div>
						<DetailCard descriptionItems={BusinessProfileData.detail} rating={rating} />
					</div>
				</XlWrapper>
			</section>
			<section>
				<XlWrapper>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row justify-items-center gap-6">
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
						<img
							className="h-60 w-auto"
							src="https://source.unsplash.com/random/?landscape"
							alt=""
						/>
					</div>
				</XlWrapper>
			</section>
			<section>
				<XlWrapper>
					<div className="space-y-10">
						<RatingInput addRating={addRating} />
						<RatingList ratingList={ratingList} />
					</div>
				</XlWrapper>
			</section>
			<Modal isOpen={contactModal} onClose={closeContactModal}>
				<div className="space-y-6">
					<H2>Zašlete nám zprávu</H2>
					<ContactBusinessForm />
				</div>
			</Modal>
		</>
	);
}