export interface FormStepProps {
    values: { [key: string]: string };
    errors: { [key: string]: string };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface BackButtonProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>
}