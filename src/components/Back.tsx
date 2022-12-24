import { BackButtonProps } from "../interface";

function Back({ step, setStep }: BackButtonProps) {
	return (
		<div>
			<button
				onClick={() => setStep(step - 1)}
				className='relative float-left w-1/6 p-3 bg-gray-300 rounded-lg text-black ml-2 bottom-5 font-bold text-sm'
				type='submit'
			>
				Back
			</button>
		</div>
	);
}

export default Back;
