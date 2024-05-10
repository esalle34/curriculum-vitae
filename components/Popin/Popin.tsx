import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Image from "next/image";

interface Props {
  displayed: boolean;
  setDisplayed: Dispatch<SetStateAction<boolean>>;
  title: string;
  closeText: string;
}

const Popin = ({
  displayed,
  children,
  setDisplayed,
  title,
  closeText,
}: PropsWithChildren<Props>) => (
  <div
    data-testid="popin"
    className={
      displayed
        ? "absolute w-full h-full flex justify-center items-center"
        : "hidden"
    }
  >
    <div className="flex flex-col gap-2 md:w-1/4 bg-slate-100 py-4 px-6 rounded z-10 border-2 border-slate-200">
      <div className="flex justify-between items-center">
        <h3 className="py-2 text-lg font-semibold text-sky-800">{title}</h3>
        <Image
          onClick={() => setDisplayed(false)}
          className="cursor-pointer"
          src="/images/cross.svg"
          width={20}
          height={20}
          alt={closeText}
          title={closeText}
          role="img"
        />
      </div>
      {children}
    </div>
    <div
      data-testid="background"
      onClick={() => setDisplayed(false)}
      className={
        displayed ? "absolute w-full h-full bg-slate-400 opacity-50" : "hidden"
      }
    />
  </div>
);

export default Popin;
