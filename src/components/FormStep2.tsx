import React from "react";
import { FormStepProps } from "../interface";

const FormStep2: React.FC<FormStepProps> = ({
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
					htmlFor='occupation'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your occupation
				</label>
				<input
					type='text'
					name='occupation'
					value={values.occupation}
					onChange={handleChange}
					placeholder='Software Engineer'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.occupation && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.occupation}
					</p>
				)}
			</div>
			<div className='mb-6'>
				<label
					htmlFor='age'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your Age
				</label>
				<input
					type='number'
					name='age'
					value={values.age}
					onChange={handleChange}
					placeholder='20'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.age && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.age}
					</p>
				)}
			</div>
			{/* div for selecting highest level of education */}
			<div className='mb-6'>
				<label
					htmlFor='education'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Highest level of education
				</label>
				<select
					name='education'
					value={values.education}
					onChange={handleChange}
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				>
					<option value=''>Select</option>
					<option value='High School'>High School</option>
					<option value='Diploma'>Diploma</option>
					<option value='Bachelor'>Bachelor</option>
					<option value='Master'>Master</option>
					<option value='PhD'>PhD</option>
				</select>
				{errors.education && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.education}
					</p>
				)}
			</div>
			<div className='mb-6 mt-10 flex'>
				<label
					htmlFor='position'
					className='mb-2 text-sm font-medium text-white float-left mr-5'
				>
					Have you ever held a leadership position?
				</label>
				<div className='flex'>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='position'
							value='Yes'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						Yes
					</label>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='position'
							value='No'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						No
					</label>
					{errors.position && (
						<p className='float-right text-red-600 items-center'>
							{errors.position}
						</p>
					)}
				</div>
			</div>
			<div className='mb-6 mt-10 flex'>
				<label
					htmlFor='limitation'
					className='mb-2 text-sm font-medium text-white float-left mr-5'
				>
					Do you have any physical limitations?
				</label>
				<div className='flex'>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='limitation'
							value='Yes'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						Yes
					</label>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='limitation'
							value='No'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						No
					</label>
					{errors.limitation && (
						<p className='float-right text-red-600 items-center'>
							{errors.limitation}
						</p>
					)}
				</div>
			</div>
			<div></div>
			<button
				className='float-right w-1/5 p-3 bg-sky-200 rounded-lg text-blue-800 font-bold text-sm'
				type='submit'
			>
				Next
			</button>
		</form>
	);
};

export default FormStep2;
