import { ReactComponent as HeaderLogo } from '../../assets/svg/logo_welbex.svg';
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as Viber } from '../../assets/svg/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/svg/whatsapp.svg';
import { navElems, useIsMobile } from '../../shared';
import { Fade } from 'react-awesome-reveal';

export const Header = (): JSX.Element => {
  const isMobile: boolean = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className="bg-black">
          <div className="flex justify-between py-4">
            {navElems.slice(0, 4).map((elem: string, idx: number) => (
              <div key={idx} className="cursor-pointer uppercase p-2">
                {elem}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-between pt-10 pb-10">
          <div className="w-1/6 ">
            <HeaderLogo />
            <Fade>
              <small className="break-words space-y-40 font-thin">
                крупный интегратор CRM в Росcии и ещё 8 странах
              </small>
            </Fade>
          </div>

          {navElems.map((elem: string, idx: number) => (
            <div key={idx} className="cursor-pointer hover:text-slate-400">
              {elem}
            </div>
          ))}

          <div className="flex gap-3 cursor-pointer">
            <span className="mr-3">+7 555 555-55-55</span>
            <Telegram />
            <Viber />
            <Whatsapp />
          </div>
        </div>
      )}
    </>
  );
};
