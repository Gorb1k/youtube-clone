import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

export interface IInputProps {
  error?: FieldError | undefined
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IInputProps

export type IInput = TypeInputPropsField
