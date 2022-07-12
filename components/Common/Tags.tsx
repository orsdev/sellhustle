import { FC, KeyboardEvent } from 'react'

type Props = {
  tags: string[]
  removeTag: (index: number) => void
  addTag: (event: KeyboardEvent<HTMLInputElement>) => void
}
const TagInput: FC<Props> = ({ tags, addTag, removeTag }) => {
  return (
    <div className="tag-input cm-border">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag font-xs">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTag(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === 'Enter' ? addTag(event) : null)}
      />
    </div>
  )
}

export default TagInput
