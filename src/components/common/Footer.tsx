import Link from 'next/link';
import Icon from '@/components/common/Icon';

import Github from '@/assets/github-mark-white.png';
import Tistory from '@/assets/logomark.png';

export default function Footer() {
	return (
		<footer className="inner bg-brown py-8 w-full text-white text-md flex-cols justify-center items-center">
			<ul className="inner center gap-20 my-auto h-[10rem]">
				<Link href="https://github.com/www-r">
					<li className=" w-[6rem]">
						<Icon src={Github} alt="github" size={50} />
					</li>
				</Link>
				<Link href="https://woorii-kye.tistory.com">
					<li className="">
						<Icon src={Tistory} alt="tistory" size={64} />
					</li>
				</Link>
			</ul>
			<p>© 2023. Kim Young En. All rights reserved.</p>
		</footer>
	);
}
