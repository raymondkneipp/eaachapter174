import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Typography, Input, Textarea, Button, HoneyPot } from "@components";

interface IFormValues {
	"Full Name": string;
	Email: string;
	Message: string;
	Fax: string;
}

const ContactForm: React.VFC = () => {
	const { register, handleSubmit, reset } = useForm<IFormValues>();
	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<IFormValues> = (data, e) => {
		setLoading(true);

		toast
			.promise(
				fetch("/api/mail", {
					method: "POST",
					body: JSON.stringify(data),
				}),
				{
					loading: "Sending message...",
					success: "Message Sent!",
					error: "Something went wrong, please try again.",
				}
			)
			.then(() => {
				setLoading(false);
				reset();
			});
	};

	return (
		<form
			className="max-w-screen-sm m-auto space-y-3 flex flex-col"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Typography variant="h3">Send us a Message</Typography>
			<Input register={register} label="Full Name" />
			<HoneyPot register={register} label="Fax" />
			<Input register={register} label="Email" type="email" />
			<Textarea register={register} label="Message" />
			<Button type="submit" disabled={loading}>
				Send
			</Button>
		</form>
	);
};

export default ContactForm;
