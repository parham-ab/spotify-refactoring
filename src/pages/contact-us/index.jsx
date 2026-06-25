// import links from "./constants/links";

// const ContactUs = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-full gap-10 px-3 py-10 bg-black">
//       {/* Heading */}
//       <div className="text-center max-w-sm">
//         <p className="text-[11px] uppercase tracking-widest text-zinc-300 mb-3">
//           Get in touch
//         </p>
//         <h2 className=" text-xl font-semibold leading-snug">
//           Let's connect
//         </h2>
//         <p className="text-zinc-500 text-sm mt-3 leading-relaxed hidden sm:block">
//           Enjoyed the app? I'd love to hear your suggestions, feedback, or any
//           job offers you might have.
//         </p>
//       </div>

//       {/* Divider */}
//       <div className="w-px h-8 bg-white/10" />

//       {/* Links */}
//       <ul className="flex items-center gap-2">
//         {links?.map(({ label, href, icon: Icon, color, target }) => (
//           <li key={label}>
//             <a
//               href={href}
//               target={target ?? "_blank"}
//               rel="noopener noreferrer"
//               className={`group relative flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-white/[0.07] text-zinc-400 text-lg transition-all duration-200 ${color} hover:border-transparent hover:scale-110 hover:shadow-lg`}
//             >
//               <Icon className="" />
//               {/* Tooltip */}
//               <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-zinc-800  text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none border border-white/[0.06]">
//                 {label}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ContactUs;

import links from "./constants/links";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full gap-12 px-6 bg-black">
      {/* Avatar / identity */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-bold text-[#1DB954]">
          P
        </div>
        <div className="text-center">
          <p className=" text-sm font-semibold">Parham Abolghasemi</p>
          <p className="text-zinc-300 text-xs mt-0.5">
            Frontend Developer · UI/UX Designer
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="flex-1 h-px bg-white/[0.2]" />
        <p className="text-[10px] uppercase tracking-widest text-zinc-300">
          Connect
        </p>
        <div className="flex-1 h-px bg-white/[0.2]" />
      </div>

      {/* Links */}
      <ul className="flex items-center gap-3">
        {links?.map(({ label, href, icon: Icon, color, target }) => (
          <li key={label} className="flex flex-col items-center gap-2">
            <a
              href={href}
              target={target ?? "_blank"}
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-white/[0.07] text-zinc-400 text-lg transition-all duration-200 ${color} hover:border-transparent hover:scale-110 hover:shadow-xl`}
            >
              <Icon className="" />
              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-zinc-800  text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none border border-white/[0.06]">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Footer note */}
      <p className="text-zinc-300 text-[12px] text-center max-w-xs leading-relaxed hidden sm:block">
        Open to suggestions, feedback, and job opportunities.
      </p>
    </section>
  );
};

export default ContactUs;
