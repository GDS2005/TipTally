const tipOptions = [
  {
    id: 'tip-0',
    value: .0,
    label: 'Sin propina'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export const TipPercentageForm = ({setTip} : TipPercentageFormProps) => {
    return(
        <>
            <div className="mt-6 border-t pt-4 flex flex-col space-y-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Propina</h3>
                <div className="flex space-x-4">
                    {tipOptions.map(tip => (
                        <label key={tip.id} className="flex items-center space-x-2">
                            <input type="radio" name="tip" id={tip.id} value={tip.value} className="accent-[#235789]" onChange={e => setTip(+e.target.value)}/>
                            <span className="text-gray-700">{tip.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}