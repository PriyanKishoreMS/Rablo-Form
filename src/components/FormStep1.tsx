import React from "react";
import { FormStepProps } from "../interface";

const FormStep1: React.FC<FormStepProps> = ({
	values,
	errors,
	handleChange,
	handleSubmit,
}) => {
	return (
		// blur the bg of form
		<form
			onSubmit={handleSubmit}
			className='flex-column p-5 rounded-xl duration-500 backdrop-blur-xl'
		>
			<div className='mb-6'>
				<label
					htmlFor='name'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your Name
				</label>
				<input
					type='text'
					name='name'
					value={values.name}
					onChange={handleChange}
					placeholder='Ken Adams'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>

				{errors.name && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.name}
					</p>
				)}
			</div>
			<div className='mb-6'>
				<label
					htmlFor='address'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your Address
				</label>
				<input
					type='text'
					name='address'
					value={values.address}
					onChange={handleChange}
					placeholder='123 Main St'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.address && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.address}
					</p>
				)}
			</div>
			<div className='mb-6'>
				<label
					htmlFor='email'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your email
				</label>
				<input
					type='email'
					name='email'
					value={values.email}
					onChange={handleChange}
					placeholder='myemail@hotmail.com'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.email && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.email}
					</p>
				)}
			</div>
			<div className='mb-6'>
				<label
					htmlFor='phone'
					className='mb-2 text-sm font-medium text-white float-left'
				>
					Your Phone
				</label>
				<input
					type='text'
					name='phone'
					value={values.phone}
					onChange={handleChange}
					placeholder='123-456-7890'
					className='bg-slate-300 placeholder-gray-500 backdrop-blur-xl text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50 focus:bg-white duration-500'
				/>
				{errors.phone && (
					<p className='float-right text-red-600 items-center mt-1'>
						{errors.phone}
					</p>
				)}
			</div>
			<div className='mb-6 mt-10 flex'>
				<label
					htmlFor='gender'
					className='mb-2 text-sm font-medium text-white float-left mr-5'
				>
					Gender
				</label>
				<div className='flex'>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='gender'
							value='Male'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						Male
					</label>
					<label className='mb-2 text-sm font-medium text-white float-left mr-5 flex items-center'>
						<input
							type='radio'
							name='gender'
							value='Female'
							onChange={handleChange}
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
						/>
						Female
					</label>
					{errors.gender && (
						<p className='float-right text-red-600 items-center'>
							{errors.gender}
						</p>
					)}
				</div>
			</div>

			<button
				className='float-right w-1/5 p-3 bg-sky-200 rounded-lg text-blue-800 font-bold text-sm'
				type='submit'
			>
				Next
			</button>
		</form>
	);
};

export default FormStep1;
