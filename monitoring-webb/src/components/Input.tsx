import './Input.scss'


interface Props {
    type: string,
    placeholder: string,
    value?: string | number
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void

}

function Input({ type, placeholder, value, onChange, onKeyDown }: Props) {
    // const [enteredValue, setEnteredValue] = useState<string | number>('')  
    return (
        <input className="input-field" placeholder={placeholder} onChange={(e) => onChange(e)} value={value} type={type} onKeyDown={(e) => onKeyDown?.(e)} />
    )
}

export default Input