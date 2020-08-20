import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import ChakraInput from './ChakraInput'

function FormikControl(props) {
    const {control, ...rest } = props
    switch(control){
        case 'input': return <Input {...rest} />
        case 'textarea': return <TextArea {...rest} />
        case 'select': return <Select {...rest} />
        case 'radio': return <Radio {...rest} />
        case 'checkbox': return <Checkbox {...rest} />
        case 'date': return <DatePicker {...rest} />
        case 'chakrainput': return <ChakraInput {...rest} />
        default: return null
    }
    return (
        <div>
            
        </div>
    )
}

export default FormikControl
