import { TButtonProps } from '../../../shared';

export const Button = ({ text }: TButtonProps) => {
  return <button className="bg-[#4077F3] hover:bg-blue-500 w-80 h-[61px]">{text}</button>;
};
