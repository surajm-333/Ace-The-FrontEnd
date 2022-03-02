import React from 'react';

const Landing = () => (
	<div className="w-full z-10 ">
		<div className="w-full  flex pt-10">
			<div className="felx flex-col w-[50%] font-Fahkwang ml-[10%] pt-[5%]">
				<div className=" text-8xl w-[90%] bg-clip-text text-transparent  bg-gradient-to-t from-fuchsia-500 via-white to-white z-50">
					Discover & Buy Rare Artworks
				</div>
				<div className=" text-3xl w-[79%] text-white mt-[5%]">
					Earn Gala tokens by playing NFT enabled games and use them to decide the future of the game!
				</div>
				<div  className="mt-10 w-[30%] ">	
					<img src="/images/button.svg" />
				</div>
				<div className=" text-3xl   text-white mt-[20%] flex space-x-[15%]">
					<div className="flex flex-col items-center z-50">
						<div>
							32k+
						</div>
						<div className="text-2xl">
							Artwork
						</div>
					</div>
					<div className="flex flex-col items-center z-50">
						<div>
							20k+
						</div>
						<div className="text-2xl">
							Gamers
						</div>
					</div>
					<div className="flex flex-col items-center z-50">
						<div>
							10k+
						</div>
						<div className="text-2xl">
							Artists
						</div>
					</div>
				</div>
			</div>
			<div className="felx flex-col w-[50%] mt-[5%] ">
				<div className="ml-[30%] w-[60%]">
					<img src="/images/head.svg" className="" />
				</div>
				<div className="flex flex-col ml-[43%]   rounded-lg w-[35%] font-Titillium  backdrop-blur-4xl  h-[8rem] bg-white/25 ">
					<div className="text-white text-4xl font-bold pt-3 ml-8 z-50">
						Peaker Head
					</div>
					<div className="flex text-white space-x-5  pt-3 ml-8 z-50">
						<div className="text-3xl">
							0.72ETH
						</div>
						<div className="pt-3">
							$29,8846
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Landing