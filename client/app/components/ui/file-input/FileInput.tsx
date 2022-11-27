import { FC } from 'react'
import styles from './FileInput.module.scss'
import { IFileUploadInput } from './file-input.interface'
import { useUploadFile } from '../../../hooks/useUploadFile'

const FileInput: FC<IFileUploadInput> = ({
  error,
  title,
  onChange,
  folder,
  setValue,
  setIsChosen,
}) => {
  const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

  return (
    <div className={styles.file}>
      {title && <h1>{title}</h1>}
      <label>
        <span className="sr-only">Choose File</span>
        <input type="file" onChange={uploadFile} className={styles.input} />
      </label>
      {error && <div>{error}</div>}
    </div>
  )
}

export default FileInput
