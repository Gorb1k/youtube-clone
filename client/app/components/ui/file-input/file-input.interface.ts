import { Dispatch, SetStateAction } from 'react'

export interface IFileUploadInput {
  title?: string
  onChange: (...event: any) => void
  folder?: string
  setValue?: (value: number) => void
  setIsChosen?: Dispatch<SetStateAction<boolean>>
  error?: string
}
