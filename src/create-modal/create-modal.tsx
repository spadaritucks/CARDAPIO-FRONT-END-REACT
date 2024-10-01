import { useRef, useState } from "react"
import './modal.css'
import { createData } from "../hooks/useFoodDataMutate"


interface InputProps {
    label: string,
    value: string | number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("")
    const formRef = useRef<HTMLFormElement>(null)

    const submit = async () => {

        if (formRef.current) {
            const formdata = new FormData(formRef.current)
            console.log(formdata)

            const response = await createData(formdata)
            console.log(response)
            
        }
    }
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardapio</h2>
                <form className="input-container" ref = {formRef}>
                <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>

                    <button className="btn-secondary" onSubmit={submit}>Postar</button>

                </form>
            </div>
        </div>
    )
}