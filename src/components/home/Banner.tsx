import { FC } from "react"

export const HomeBanner: FC = () => {
	const emTitleClass = "flex items-center overflow-hidden my-[-0.1em] py-[0.1em]"

	return (
		<section className='bg-dark text-white'>
			<div className='p-0'>
				<div className='flex h-screen min-h-[80vh] flex-col justify-center'>
					<div className='px-[6.25vw]'>
						<h2 className='flex cursor-default flex-col text-[17.1rem] uppercase leading-[90%] tracking-[-0.03em]'>
							<em className={emTitleClass}>
								<span>We</span>
								<span className='group relative ml-[0.2em] h-[15.3rem] overflow-hidden rounded-full px-[4.8rem] font-[serif] text-tetriary hover:scale-x-[1.02] hover:transition-transform hover:duration-[600ms] hover:ease-[cubic-bezier(.34,5.56,.64,1)]'>
									<span className='absolute inset-0 rounded-full border-2 border-tetriary' />
									<span className='absolute inset-0 translate-y-full rounded-[50%] bg-tetriary transition-transformRadius duration-transformRadius ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none group-hover:duration-transformRadiusHover' />
									<span
										data-text='Create'
										className='ease-[transform .8s cubic-bezier(.16,1,.3,1)] relative flex transition-transform duration-[400ms] after:absolute after:left-0 after:top-[110%] after:text-black after:content-dataText group-hover:-translate-y-[110%]'>
										Create
									</span>
								</span>
							</em>
							<em className={emTitleClass}>
								<span>Memorable</span>
							</em>
							<em className={emTitleClass}>
								<span className='animate-blink'>_</span>
								<span>Websites</span>
							</em>
						</h2>
					</div>

					<div className='absolute bottom-16 left-20 top-auto flex items-center'>
						<span className='text-[1.6rem] font-medium uppercase'>Est. 2010</span>
						<span className='ml-[41rem] text-[1.6rem] font-medium uppercase'>(SCROLL)</span>
					</div>
				</div>

				<div className='ml-20 max-w-[85%] -translate-y-1/2'>
					<div className='relative ml-auto h-[53.2rem] max-w-[48.1rem] overflow-hidden rounded-full'>
						<video
							className='absolute inset-0 size-full object-cover'
							data-src='https://cdn.cuberto.com/cb/hello/intro/2.mp4'
							autoPlay
							playsInline
							loop
							muted
							src='https://cdn.cuberto.com/cb/hello/intro/2.mp4'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
