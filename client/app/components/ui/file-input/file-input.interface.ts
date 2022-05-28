export interface IFileUploadInput {
    title?:string
    onChange: (...event: any) => void,
    folder?: string
    setValue?: (value: number) => void
}