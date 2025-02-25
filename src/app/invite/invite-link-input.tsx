import { IconButton } from '@/components/icon-button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { Link, Copy } from 'lucide-react'

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/56454132165"
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
