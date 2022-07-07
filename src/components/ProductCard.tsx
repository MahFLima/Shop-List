import { XCircle } from "phosphor-react";
import { FunctionComponent } from "react";

type Props = React.HTMLProps<HTMLButtonElement> &{
  product: string
  value: number
  amount: number
  clear?: () => void
}

export const ProductCard: FunctionComponent<Props> = ({product, value, amount, clear, onClick}) => {
  return (
    <div className="w-full p-2 rounded bg-purple-500 flex justify-between items-center" >
      <div className="flex flex-col">
        <strong className="text-2xl">{product}</strong>
        <span className="flex flex-col text-xs justify-between">
          <p>preço: {value}</p>
          <p>quantidade: {amount}</p>
        </span>
      </div>
      <div className="flex gap-2">
        <button onClick={clear}><XCircle size={32} /></button>
        {/* <button onClick={onClick}><NotePencil size={32} /></button> */}
      </div>
    </div>
  );
}
