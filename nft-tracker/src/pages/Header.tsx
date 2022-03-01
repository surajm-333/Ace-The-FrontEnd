import React from 'react';
import Link from 'next/link'

const Header = () => (
	<div className="w-full z-10 ">
		<div className="w-full flex justify-around pt-10 text-white items-center">
			<Link href="/">
				<div className="cursor-pointer z-50">
					<img src="/images/main_star.png" />
				</div>
			</Link>
			<div className="flex space-x-20 font-Titillium z-50 ">
				<Link href="/ExploreRoute" >
					<div className="cursor-pointer">
						Explore
					</div>
				</Link>
				<div>
					Activity
				</div>
				<div>
					How it works
				</div>
			</div>
			<div className="z-50 ">	
				<img src="/images/button1.svg" />
			</div>
			
		</div>
	</div>
)

export default Header