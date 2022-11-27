import { FieldError } from 'react-hook-form'
import { TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps {
  error?: FieldError | undefined
}
type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
  ITextAreaProps

export type ITextArea = TypeInputPropsField
