import { useEffect } from 'react';
// import {
//   MapPinIcon,
//   AtSymbolIcon,
//   CalendarIcon,
//   AcademicCapIcon,
//   BriefcaseIcon,
// } from "@heroicons/react/20/solid";
import AOS from 'aos';
import 'aos/dist/aos.css';
const features = [
  // {
  //   name: "Age:",
  //   description: "18 years old",
  //   icon: CalendarIcon,
  // },
  // {
  //   name: "Email:",
  //   description: "name@example.com",
  //   icon: AtSymbolIcon,
  // },
  // {
  //   name: "Location:",
  //   description: "India, Earth",
  //   icon: MapPinIcon,
  // },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative isolate overflow-hidden lg:overflow-visible lg:px-0" id="about">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-lg leading-7">Get to know more</h2> */}
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">About Me</p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                Selamat datang di portofolio web saya! Saya seorang pengembang web pemula yang bersemangat untuk memulai perjalanan saya dalam dunia pengembangan web. Meskipun belum memiliki proyek profesional sebelumnya, saya memiliki
                dedikasi yang kuat untuk belajar dan mengembangkan keterampilan saya. Portofolio ini mencerminkan pengetahuan dasar saya dalam HTML, CSS, dan JavaScript, serta minat saya dalam mempelajari teknologi dan framework terbaru.
                Saya percaya bahwa dengan kerja keras, ketekunan, dan semangat belajar yang tidak pernah padam, saya akan menjadi pengembang web yang lebih terampil dan berkualitas di masa depan. Terima kasih telah mengunjungi portofolio
                saya, dan saya berharap dapat berkolaborasi dengan Anda dalam proyek mendatang.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden" data-aos="fade-left">
          <img className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]" src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8" alt="Person" />
        </div> */}
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            {/* <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mt-3 list-item list-inside">
                  Vestibulum vitae augue sit amet ex laoreet euismod sed eu dui.
                </p>
                <p className="mt-3 list-item list-inside">
                  Fusce et leo nec elit mollis sollicitudin.
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mt-3 list-item list-inside">
                  Vestibulum vitae augue sit amet ex laoreet euismod sed eu dui.
                </p>
                <p className="mt-3 list-item list-inside">
                  Fusce et leo nec elit mollis sollicitudin.
                </p>
              </div>
            </div> */}
            <dl className="mt-10 space-y-8 text-base leading-7 lg:max-w-none" data-aos="fade-right">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
