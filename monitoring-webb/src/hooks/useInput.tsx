import { useState } from 'react'

const useInput = () => {
    const [enteredValue, setEnteredValue] = useState<string | number>('')

    const valueChangedHadler = (e: React.FormEvent<HTMLInputElement>) => {
        setEnteredValue(e.currentTarget.value)
    }
    const manualSetValue = (valuetoSet: string | number) => {
        setEnteredValue(valuetoSet)
    }

    return {
        value: enteredValue,
        valueChangedHadler,
        manualSetValue
    }
}
export default useInput;