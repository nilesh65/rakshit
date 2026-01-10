import { motion } from "framer-motion";

const services = [
  {
    title: "Complete Home Interiors",
    img: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475977137_636149892251757_1688439624541463103_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DLNMFg5NlGwQ7kNvwFa8K5E&_nc_oc=AdkbXsO0zzTCEOeoMC24vUXwLcda2pFXnM1ILRUqtpqVMqsKefhi0_OaFjzRK-gqvH8&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=brQWk_LRVqxPitIi8WkuBg&oh=00_Afp77FasHmshWFA32a41kBWzT1L_iGxDTU9ad-VfoXVqqQ&oe=696797BE",
  },
  {
    title: "Commercial Interior Design",
    img: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475859808_636900375510042_8487669665408814746_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KEO1Ef3swvsQ7kNvwGb1IEC&_nc_oc=Adm1B52Z3oVw5YTurypr8xsLR1extsYM1eGJm_tE1Jf1yRV6sC7vkcQ1oUjOFQyY5qg&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=-ui4vCvkFPJiFlqHIKSdIw&oh=00_Afo6cZmpLJWi63ZcFm1sx8pXxjbzl19vI6sXuEdjDK_MZw&oe=6967843F",
  },
  {
    title: "Customised Interior Solutions",
    img: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/475806914_636900455510034_3991707037375508975_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sS5-2ZtQW08Q7kNvwF7uCZG&_nc_oc=AdnT1aaJn6WScRDL4iZEi3rTIyJV7mjgJohb4EaX0u_vgSTqFsSASeyTOx9WeLsI7j4&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=H2ulCkNonRakdlVGKjZTrw&oh=00_Afo2NoFUJLr3ax3lsQsPL_HCxcIAgx-jpZW3_fmUC_IfOw&oe=6967955F",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-yellow-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
  {services.map((s, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-xl"
    >
      <img
        src={s.img}
        alt={s.title}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{s.title}</h3>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
