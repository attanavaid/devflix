interface CustomInputBarProps {
  id: string;
  value: string;
  label: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInputBar = ({ id, value, label, type, onChange }: CustomInputBarProps) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder=" "
        className="block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 invalid:border-b-1 peer" 
      />

      <label 
        htmlFor={id} 
        className="absolute text-md text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] left-1 px-2 peer-focus:px-2 peer-focus:text-zinc-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInputBar;