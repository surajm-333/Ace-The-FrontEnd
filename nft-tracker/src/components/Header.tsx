import React from 'react';


const Header = () => (
	<div className="w-full ">
		<div className="w-full flex justify-evenly pt-10 text-white items-center">
			<div>
				<img src="/images/main_star.png" />
			</div>
			<div className="flex space-x-20 font-Titillium mr-[25%] ">
				<div>
					Explore
				</div>
				<div>
					Activity
				</div>
				<div>
					How it works
				</div>
			</div>
			<div className="flex space-x-5 font-Titillium w-[25%]">
				<div className=" border w-[100%] h-[2.5rem] flex justify-center  ">
					<button className="flex space-x-10 items-center ">
						<div className="">
							Search 3D NFT's
						</div>
						<span className="">
							<img src="/images/search.png" className="w-[70%]"/>
						</span>
					</button>
				</div>
				<div  className=" border w-[100%] flex justify-center items-center ">
					<button>
						<span>
							Connect Wallet
						</span>
					</button>
				</div>
			</div>
			
		</div>
	</div>
)

export default Header