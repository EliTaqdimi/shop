import { ComponentProps } from "react"


type TVariant = 'primary' | 'secondry' | 'danger' | 'success' | 'warning'
type Button = ComponentProps<'button'> & {
  variant?: TVariant;
}



export default function Button({ children, variant, style, ...rest }: Button) {
  return (
    <button style={{ border: '1px solid #ffff', borderRadius: '5px', padding: '15px', ...style, ...variantCheck(variant) }} {...rest}>
      {children}
    </button>
  )
}


function variantCheck(variant?: TVariant) {

  if (variant === 'primary') {
    return { background: '#00a4ff', color: 'white' };
  }
  else if (variant === 'danger') {
    return { background: 'red', color: 'white' };
  }
  else if (variant === 'success') {
    return { background: 'green', color: 'white' };
  }
  else if (variant === 'warning') {
    return { background: 'yellow', color: 'white' };
  }
  else if (variant === 'secondry') {
    return { background: '#ccc', color: 'white' };
  }

}
