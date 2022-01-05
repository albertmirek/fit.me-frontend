import { H1, H3, XlWrapper, ButtonFilter } from "@src/atoms";
import { Filter, Sorter } from "@src/molecules";
import { EventsList } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";
import hooliIcon from "@assets/img/hooli-brands.svg";

export default function Events() {
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});

	return (
		<DynamicSite>
			<div className="bg-white shadow rounded-lg mb-10 z-100">
				<XlWrapper>
					<H1>Lekce</H1>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-6">
							Hledej lekci
						</label>
						<div className="mt-1 flex rounded-md shadow-sm">
							<div className="relative flex items-stretch flex-grow focus-within:z-10 ">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQokaXSPU5CQRTF8R+yBQMBCmNFYwOhh9YF2OouYAsUuAgTE9gBO6DBxhUYG4x5pZ2VxdxnyPPNI8HT3MydnP8988E/1KrpdXEb9RPbqH/UroAWeI71N0Z4jL1dU4oF9uhX+gO8YJ4zdlHUGI8BBTp1se+iPmXMXxhL8V/L5kXUHt5zsUJv1WSl+QNXJ8zXONRtlGceZIzDGHCZI8+lW60ChtI5V02xWgEosMYSm5i4kj7KrAlAeo576d0fjqJOAzA9BcipBEzOBUxwc675Vz9TjCH7ON3ppAAAAABJRU5ErkJggg==" />
								</div>
								<input
									type="text"
									name="adress"
									id="adress"
									className="py-2 ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md rounded-r-md pl-10 sm:text-sm border border-gray-300"
									placeholder="U Jindřišské věže 23 / Praha / XFitness"
								/>
							</div>
						</div>
						<div className="mt-5 flex ">
							<div className="max-w-xs">
								<H3 variant="small">Filtr: </H3>
								<div className="flex flex-col gap-y-5">
									<Filter
										name="Tagy"
										// options={options}
										filters={filters}
										setFilters={(val) => setFilters(val)}
									/>

									<div className=" flex gap-x-3 gap-y-1 flex-wrap">
										{filters.tags.map((tag, index) => {
											return (
												<ButtonFilter
													name={tag}
													filters={filters}
													setFilters={setFilters}
													key={index}
												/>
											);
										})}
									</div>
								</div>
							</div>
							<div className="absolute left-1/4 ml-32">
								<H3 variant="small">Seřadit dle hodnocení:</H3>
								<Sorter setFilters={setFilters} filters={filters} />
							</div>
						</div>
					</div>
				</XlWrapper>
			</div>
			<section className="mx-auto">
				<XlWrapper>
					<EventsList filters={filters} />
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}