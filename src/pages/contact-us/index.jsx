import useTitle from "../../hooks/useTitle";
import links from "./constants/links";

const ContactUs = () => {
  useTitle("React Spotify - 📫");

  return (
    <section className="flex flex-col items-center justify-center h-full gap-10 px-6 py-16 bg-black">
      {/* Heading */}
      <div className="text-center max-w-sm">
        <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
          Get in touch
        </p>
        <h2 className="text-white text-xl font-semibold leading-snug">
          Let's connect
        </h2>
        <p className="text-zinc-500 text-sm mt-3 leading-relaxed hidden sm:block">
          Enjoyed the app? I'd love to hear your suggestions, feedback, or any
          job offers you might have.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-white/10" />

      {/* Links */}
      <ul className="flex items-center gap-3">
        {links?.map(({ label, href, icon: Icon, color, target }) => (
          <li key={label}>
            <a
              href={href}
              target={target ?? "_blank"}
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-white/[0.07] text-zinc-400 text-lg transition-all duration-200 ${color} hover:border-transparent hover:scale-110 hover:shadow-lg`}
            >
              <Icon className="text-white" />
              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-zinc-800 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none border border-white/[0.06]">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactUs;
