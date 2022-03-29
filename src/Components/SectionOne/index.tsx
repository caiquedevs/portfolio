import { AiOutlineArrowRight } from 'react-icons/ai';

export default function SectionOneComponent() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black">
      <header className="w-full pt-14 px-24 flex justify-between mb-5">
        <div className="flex">
          <span className="text-xl text-gray-400 font-bold uppercase">caiquedevs</span>
        </div>

        <ul className="flex items-center gap-20">
          <li className="text-base text-primary font-bold uppercase">About</li>
          <li className="text-base text-gray-400 font-bold uppercase">Portfólio</li>
          <li className="text-base text-gray-400 font-bold uppercase">Contact</li>
        </ul>
      </header>

      <section className="w-full flex flex-col items-center justify-center">
        <figure className="flex items-center">
          <div className="flex items-end justify-center">
            <div className="flex absolute">
              <img src="images/bg-photo.png" alt="bg-photo" />
            </div>
            <div className="top-1">
              <img src="images/photo.png" alt="photo" />
            </div>
          </div>

          <figcaption className="flex flex-col -ml-28">
            <span className="text-100px text-primary tracking-wide font-bold uppercase">
              Creative
            </span>
            <span className="text-45px text-secondary tracking-full font-bold uppercase -top-4">
              Developer
            </span>
            <span className="text-41px text-gray-400 tracking-min font-light uppercase -top-1">
              Sensible to frontend
            </span>
          </figcaption>
        </figure>

        <ul className="flex flex-col gap-5 absolute top-1/2 left-24 -translate-y-1/2">
          <li className="w-4 h-4 bg-gray-300 rounded-full"></li>
          <li className="w-4 h-4 bg-gray-300 rounded-full"></li>
          <li className="w-4 h-4 bg-gray-300 rounded-full"></li>
          <li className="w-4 h-4 bg-gray-300 rounded-full"></li>
        </ul>

        <footer className="flex items-center gap-4 absolute bottom-0 right-24 rotate-90 translate-x-1/2">
          <span className="text-sm uppercase">Scroll down</span>
          <AiOutlineArrowRight size="26" />
        </footer>
      </section>
    </div>
  );
}
