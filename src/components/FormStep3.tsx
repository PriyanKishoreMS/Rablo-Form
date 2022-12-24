import React from "react";
import { FormStepProps } from "../interface";

const FormStep3: React.FC<FormStepProps> = ({
	values,
	errors,
	handleChange,
	handleSubmit,
}) => {
	return (
		<form
			onSubmit={handleSubmit}
			className='flex-column  p-5 rounded-xl duration-500 backdrop-blur-xl'
		>
			<div className='mb-6'>
				<label
					htmlFor='questions'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your questions
				</label>
				<textarea
					name='questions'
					value={values.questions}
					onChange={handleChange}
					placeholder='What are your questions?'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.questions && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.questions}
					</p>
				)}
			</div>
			{/* div to upload resume */}
			<div className='mb-6'>
				<label
					htmlFor='resume'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Upload your resume
				</label>
				<input
					type='file'
					name='resume'
					accept='application/pdf'
					onChange={handleChange}
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.resume && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.resume}
					</p>
				)}
			</div>
			<div className='flex justify-end mt-10 relative top-12'>
				<button
					className=' w-1/5 mt-5 p-3 bg-sky-200 rounded-lg text-blue-800 font-bold text-sm'
					type='submit'
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default FormStep3;
