export const validateName = (name: string, step: number) => {
	if (step == 1 && !name) return "Name is required";
	else if (step == 1 && name.length < 3)
		return "Name must be at least 3 characters";
	else return "";
};

export const validateEmail = (email: string, step: number) => {
	if (step == 1 && !email) return "Email is required";
	// test email
	else if (step == 1 && !/\S+@\S+\.\S+/.test(email))
		return "Invalid email address";
	else return "";
};

export const validateGender = (gender: string, step: number) => {
	if (step == 1 && !gender) return "Gender is required";
	else return "";
};

export const validateAddress = (address: string, step: number) => {
	if (step == 1 && !address) return "Address is required";
	else if (step == 1 && address.length < 3)
		return "Address must be at least 3 characters";
	else return "";
};

export const validatePhone = (phone: string, step: number) => {
	if (step == 1 && !phone) return "Phone is required";
	// test phone
	else if (
		step == 1 &&
		/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)
	)
		return "Invalid phone number";
	else return "";
};

export const validateAge = (age: string, step: number) => {
	if (step == 2 && !age) return "Age is required";
	else if (step == 2 && age.length < 1)
		return "Age must be at least 1 characters";
	else return "";
};

export const validateOccupation = (occupation: string, step: number) => {
	if (step == 2 && !occupation) return "Occupation is required";
	else if (step == 2 && occupation.length < 3)
		return "Occupation must be at least 3 characters";
	else return "";
};

export const validatePosition = (position: string, step: number) => {
	if (step == 2 && !position) return "Position is required";
	else return "";
};

export const validateEducation = (education: string, step: number) => {
	if (step == 2 && !education) return "Education is required";
	else return "";
};

export const validateLimitation = (limitation: string, step: number) => {
	if (step == 2 && !limitation) return `Limitation is required`;
	else return "";
};

export const validateResume = (resume: Boolean, step: number) => {
	if (step == 3 && resume == false) return "Resume is required";
	else return "";
};

export const validateQuestions = (questions: string, step: number) => {
	if (step == 3 && !questions) return "Questions is required";
	else return "";
};
