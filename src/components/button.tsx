interface ButtonProps {
  text?: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="bg-violet-500 px-5 py-2 rounded-sm mt-5 ml-5">
      {text || 'Enviar'}
    </button>
  )
}
