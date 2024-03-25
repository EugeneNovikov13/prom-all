import { Input, Textarea } from 'features';
import styled from 'styled-components';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IQuickOrderForm } from 'types';

interface OrderFormInputsProps {
	className?: string;
	register: UseFormRegister<IQuickOrderForm>;
	errors: FieldErrors<IQuickOrderForm>;
	onInputChange: () => void;
}

const OrderFormInputsContainer: FC<OrderFormInputsProps> = ({
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
			<Textarea
				placeholder="Здесь вы можете более подробно описать цель вашего обращения"
				type="text"
				error={errors?.order?.message}
				{...register('order', {
					onChange: onInputChange,
				})}
			/>
		</div>
	);
};

export const OrderFormInputs = styled(OrderFormInputsContainer)`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;

	& div.input-wrapper {
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 16px;
	}
`;
