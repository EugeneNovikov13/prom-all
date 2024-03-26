import { FieldNamesMarkedBoolean, DeepPartial, FieldValues } from 'react-hook-form';

export function checkFormFieldsIsDirty<T extends FieldValues>(
	dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<T>>>,
	defaultValues: Readonly<DeepPartial<T>> | undefined,
) {
	return defaultValues ? Object.values(dirtyFields).length === Object.values(defaultValues).length : false
}
