import { Typography } from '@components';
import { UseFormRegister } from 'react-hook-form';

interface Props {
	label: string;
	rows?: number;
	register: UseFormRegister<any>;
}

const Textarea: React.VFC<Props> = ({ label, rows = 4, register }) => {
	return (
		<div className="flex flex-col space-y-1">
			<Typography
				variant="h6"
				element="label"
				htmlFor={label.replace(/\s/g, '')}
			>
				{label}
			</Typography>
			<textarea
				id={label.replace(/\s/g, '')}
				className="border border-neutral-300 rounded-3xl p-3 resize-y"
				required
				rows={rows}
				{...register(label, { required: true })}
			></textarea>
		</div>
	);
};

export default Textarea;
