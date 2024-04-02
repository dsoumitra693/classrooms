import React, { ChangeEventHandler } from 'react'
import { Input, InputProps } from '@/components/ui/Input'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'

interface PasswordInputProps extends InputProps{
    handleChange:ChangeEventHandler<HTMLInputElement>
}

const PasswordInput:React.FC<PasswordInputProps> = ({handleChange, ...props}) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className="flex-row flex relative items-center">
            <Input
                id="password"
                placeholder="••••••••"
                type={visible ? "text" : "password"}
                onChange={handleChange}
                {...props}
            />

            <button
                type="button"
                className="ml-2 focus:outline-none z-20 absolute right-3"
                onClick={() => setVisible(!visible)}
            >
                {!visible ? (
                    <IconEyeClosed className="h-5 w-5 text-gray-400" />
                ) : (
                    <IconEye className="h-5 w-5 text-gray-400" />
                )}
            </button>
        </div>
    )
}

export default PasswordInput