import { Input, Textarea } from '../../../features';
import styled from 'styled-components';

const FormInputsContainer = ({ className, register, errors, onInputChange }) => {
	return (
		<div className={className}>
			<div className="input-wrapper">
				<Input
					name="name"
					placeholder="Ваше имя"
					type="text"
					error={errors?.name?.message}
					{...register('name', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="organization"
					placeholder="Название организации"
					type="text"
					error={errors?.organization?.message}
					{...register('organization', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="email"
					placeholder="Электронная почта"
					type="text"
					error={errors?.email?.message}
					{...register('email', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="phone"
					placeholder="Контактный телефон"
					type="text"
					error={errors?.phone?.message}
					{...register('phone', {
						onChange: onInputChange,
					})}
				/>
			</div>
			<Textarea
				name="application"
				placeholder="Здесь вы можете более подробно описать цель вашего обращения"
				type="text"
				error={errors?.application?.message}
				{...register('application', {
					onChange: onInputChange,
				})}
			/>
		</div>
	);
};

export const FormInputs = styled(FormInputsContainer)`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	& div.input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
`;
