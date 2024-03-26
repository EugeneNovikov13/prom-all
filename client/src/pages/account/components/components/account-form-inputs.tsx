import { Input } from 'features';
import styled from 'styled-components';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAccountForm } from 'types';
import { FC } from 'react';

interface AccountFormInputsProps {
	className?: string;
	register: UseFormRegister<IAccountForm>;
	errors: FieldErrors<IAccountForm>;
	onInputChange: () => void;
}

const AccountFormInputsContainer: FC<AccountFormInputsProps> = ({
	className,
	register,
	errors,
	onInputChange,
}) => {
	return (
		<div className={className}>
			<div className="input-wrapper">
				<Input
					placeholder="ФИО"
					type="text"
					error={errors?.name?.message}
					{...register('name', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Название организации"
					type="text"
					error={errors?.organization?.message}
					{...register('organization', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Электронная почта"
					type="text"
					disabled={true}
					error={errors?.email?.message}
					{...register('email', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Контактный телефон"
					type="text"
					error={errors?.phone?.message}
					{...register('phone', {
						onChange: onInputChange,
					})}
				/>
			</div>
		</div>
	);
};

export const AccountFormInputs = styled(AccountFormInputsContainer)`
	display: flex;
	flex-wrap: wrap;

	& div.input-wrapper {
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 16px;
	}
`;
