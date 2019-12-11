import { ChangeEventHandler } from 'react';

interface FieldProps<T = Element> {
  id: string;
  value: string | number;
  changed: ChangeEventHandler<T>;
}

export default FieldProps;