import "./App.css";
import React, { useState } from "react";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import Back from "./components/Back";
import * as validate from "./components/Validation";

const App: React.FC = () => {
	const [step, setStep] = useState(1);
	const [values, setValues] = useState({
		name: "",
		address: "",
		phone: "",
		age: "",
		email: "",
		gender: "",
		occupation: "",
		position: "",
		limitation: "",
		questions: "",
		education: "",
	});
	const [files, setFiles] = React.useState<File | null>(null);
	const [submitFiles, setSubmitFiles] = React.useState<File | null>(null);
	const [errors, setErrors] = useState({
		name: "",
		address: "",
		phone: "",
		age: "",
		email: "",
		gender: "",
		occupation: "",
		position: "",
		limitation: "",
		resume: "",
		questions: "",
		education: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		setFiles(event.target.files ? event.target.files[0] : null);
	};
	const url = files ? URL.createObjectURL(files) : undefined;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let stat = files ? true : false;
		const errors = {
			name: validate.validateName(values.name, step),
			address: validate.validateAddress(values.address, step),
			phone: validate.validatePhone(values.phone, step),
			age: validate.validateAge(values.age, step),
			email: validate.validateEmail(values.email, step),
			gender: validate.validateGender(values.gender, step),
			occupation: validate.validateOccupation(values.occupation, step),
			position: validate.validatePosition(values.position, step),
			limitation: validate.validateLimitation(values.limitation, step),
			resume: validate.validateResume(stat, step),
			questions: validate.validateQuestions(values.questions, step),
			education: validate.validateEducation(values.education, step),
		};

		if (Object.values(errors).every(error => !error)) {
			setStep(step + 1);
			setSubmitFiles(files);
			console.log(submitFiles, "files");
			console.log(url);
			console.log(values, "values");
			console.log(errors, "errors");
		} else {
			setErrors(errors);
			console.log(values, "errvalues");
			console.log(errors, "errerrors");
		}
	};
	return (
		//tailwindcss
		// div for background color
		<div className='bg-gradient-to-r from-blue-900 to-sky-900 min-h-screen justify-center'>
			<div className='bg-gradient-to-r from-blue-900 to-sky-900  h-4 w-full relative'>
				<div
					className='bg-white h-4 w-1/4 absolute left-0 top-0 rounded-r-md'
					style={{
						width: `${(step - 1) * 33.33}%`,
						transition: "width 1s ease-in-out",
					}}
				></div>
			</div>
			<div className='container mx-auto w-full md:w-1/2 align-middle pt-20'>
				<h1 className='text-4xl text-white ml-4 mb-5'>
					Form Using React {step == 4 ? " Completed" : step + " of 3"}
				</h1>
				{step === 1 && (
					<FormStep1
						values={values}
						errors={errors}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				)}
				{step === 2 && (
					<>
						<FormStep2
							values={values}
							errors={errors}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
						<Back step={step} setStep={setStep} />
					</>
				)}
				{step === 3 && (
					<>
						<FormStep3
							values={values}
							errors={errors}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
						<Back step={step} setStep={setStep} />
					</>
				)}
				{step === 4 && (
					<div className='bg-gray-300 p-4 rounded-xl shadow-xl opacity-80 m-2 flex flex-col items-center'>
						<h2 className='text-2xl font-bold text-green-700'>Success!</h2>
						<div className='mt-2 w-full flex flex-col'>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Name:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.name}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Address:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.address}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Phone:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.phone}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Email:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.email}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Age:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.age}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Occupation:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.occupation}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Education: </p>
								<p className='text-sm font-medium text-gray-700'>
									{values.education}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Gender:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.gender}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Disability:</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.limitation}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>
									Leadership position:
								</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.position}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>
									Questions/Comments:
								</p>
								<p className='text-sm font-medium text-gray-700'>
									{values.questions}
								</p>
							</div>
							<div className='mb-2 flex justify-between'>
								<p className='text-sm font-medium text-gray-900'>Resume:</p>
								<a
									href={URL.createObjectURL(files)}
									download={submitFiles?.name}
									onClick={event => {
										event.preventDefault();
										window.open(URL.createObjectURL(files));
									}}
								>
									{files.name}
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
