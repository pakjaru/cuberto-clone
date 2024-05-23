import { FC } from "react"

export const NotFoundPage: FC = () => {
	return (
		<section className='flex h-screen w-screen flex-col items-center justify-center gap-y-5'>
			<h2 className='text-5xl'>Oops!</h2>
			<p>Sorry, an unexpected error has occured.</p>
			<p className='italic opacity-50'>Not Found</p>
		</section>
	)
}
