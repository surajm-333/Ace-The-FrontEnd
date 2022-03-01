import React from 'react';


const Header = () => (
	<div className="w-full h-full">
		<div className="w-full h-full flex justify-around pt-5 text-white">
			<div>
				<img src="/images/main_star.png" />
			</div>
			<div className="flex space-x-10 font-Titillium">
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
			<div className="flex space-x-5">
				<div>
					<button>
						<span>
							Search 3D NFT's
						</span>
						<span>
							<img src="/images/search.png" />
						</span>
					</button>
				</div>
				<div>
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