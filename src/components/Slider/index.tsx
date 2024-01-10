'use client';

import { PropsWithChildren } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props extends PropsWithChildren {
	type: string;
	height?: number;
}

export default function Slider({ children, type }: Props) {
	switch (type) {
		case 'skill':
			const responsive = {
				xl: {
					breakpoint: { max: 3000, min: 1440 },
					items: 10,
				},
				lg: {
					breakpoint: { max: 1440, min: 1024 },
					items: 10,
				},
				md: {
					breakpoint: { max: 976, min: 768 },
					items: 8,
				},
				sm: {
					breakpoint: { max: 768, min: 570 },
					items: 6,
				},
				xs: {
					breakpoint: { max: 570, min: 0 },
					items: 5,
				},
			};
			return (
				<Carousel
					responsive={responsive}
					ssr // means to render carousel on server-side.
					partialVisible
					infinite
					autoPlay
					autoPlaySpeed={800}
					// pauseOnHover={true}
					removeArrowOnDeviceType={['xs', 'sm', 'md', 'lg', 'xl']}
					containerClass=" h-[20rem] w-full"
					itemClass="center hover:w-10 hover:bg-yellow hover:translate()"
				>
					{children}
				</Carousel>
			);
		case 'project':
			const responsive2 = {
				desktop: {
					breakpoint: { max: 3000, min: 1024 },
					items: 3,
					slidesToSlide: 3, // optional, default to 1.
				},
				tablet: {
					breakpoint: { max: 1024, min: 464 },
					items: 2,
					slidesToSlide: 2, // optional, default to 1.
				},
				mobile: {
					breakpoint: { max: 464, min: 0 },
					items: 1,
					slidesToSlide: 1, // optional, default to 1.
				},
			};
			return (
				<Carousel
					swipeable
					responsive={responsive2}
					ssr // means to render carousel on server-side.
					infinite
					removeArrowOnDeviceType={['tablet', 'mobile']}
					containerClass="my-10 py-10 w-full"
					// sliderClass="gap-0"
					itemClass="center"
					centerMode
				>
					{children}
				</Carousel>
			);
	}
}
