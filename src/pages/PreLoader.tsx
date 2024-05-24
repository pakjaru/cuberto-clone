import { FC, useEffect, useRef } from "react"
import { timeline, TimelineDefinition } from "motion"

import { imageOne, imageTwo, imageThree, imageFour, imageFive } from "@images"

export const PreLoader: FC = () => {
	const images = [
		imageOne,
		imageTwo,
		imageThree,
		imageFour,
		imageFive,
		imageOne,
		imageTwo,
		imageThree,
		imageFour,
		imageFive,
	]

	const loaderRef = useRef<HTMLDivElement>(null)
	const progressRef = useRef<HTMLDivElement>(null)
	const imagesRef = useRef<HTMLDivElement>(null)
	const videoRef = useRef<HTMLVideoElement>(null)

	const startTimeline = () => {
		if (!loaderRef.current || !progressRef.current || !imagesRef.current) return

		const loaderSeq: TimelineDefinition = [
			[loaderRef.current, { scale: [1.05, 1], opacity: [0, 1] }, { duration: 0.8, delay: 1 }],
			[progressRef.current, { width: [0, "100%"] }, { duration: 2 }],
			[loaderRef.current, { scale: 0.95 }, { duration: 0.5 }],
			[imagesRef.current, { y: "-2.5%" }, { delay: -0.5 }],
			[imagesRef.current, { y: "-100%" }, { duration: 2 }],
		]

		timeline(loaderSeq).finished.then(() => {
			videoRef.current?.play()
		})
	}

	useEffect(() => {
		startTimeline()
	}, [])

	return (
		<div className='h-screen w-screen overflow-hidden'>
			<div className='size-full bg-preLoader p-20'>
				<div ref={loaderRef} className='group relative size-full rounded-[8px] border-2 border-preLoader'>
					<div className='absolute inset-x-10 bottom-10 flex items-center gap-10 text-white'>
						<div className='text-[18px]'>Loading wow stories</div>
						<div className='flex flex-1 items-center'>
							<div ref={progressRef} className='h-[2px] bg-white' />
						</div>
						<div className='text-[18px]'>{`10 / ${images.length}`}</div>
					</div>
				</div>
			</div>
			<div ref={imagesRef} className='flex flex-col gap-y-[12px] bg-preLoaderGradient p-[12px]'>
				{images.map((image, idx) => (
					<div key={idx} className='h-[500px] overflow-hidden rounded-[8px]'>
						<img src={image} className='object-cover' />
					</div>
				))}
				<div className='relative overflow-hidden rounded-[8px]' style={{ height: "calc(100vh - 24px)" }}>
					<video
						ref={videoRef}
						className='absolute inset-0 size-full object-cover'
						data-src='https://cdn.cuberto.com/cb/hello/intro/2.mp4'
						playsInline
						loop
						muted
						src='https://cdn.cuberto.com/cb/hello/intro/2.mp4'
					/>
				</div>
			</div>
		</div>
	)
}
