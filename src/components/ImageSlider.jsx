import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/240724493_100188619078134_1664719460929327587_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j5JvSPhQADAQ7kNvwELnmB3&_nc_oc=AdkZ2StqtRldSUiyhtWDriEM8FWuV8Y8BLDkkH_RSOcLosXhOmoxgpswmOAl7HJXShU&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=VfQlgAMDZdmPYd4WuFqofw&oh=00_Afr8HJq3dVlX8IA381nAVoq_QbutQ-0Tl7lk0Fm_Fufa6w&oe=69678546",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/477195462_642384168294996_2879957530245032907_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cJOt6_nXpCMQ7kNvwHX_dXr&_nc_oc=AdlgQYdtN52e20-fGNnclZ86P4nQVIAZRHeXHbqODkk9l7Jj1J3MNDHxU0jiJ4OQPNs&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=nqvPEPqNlpg6frDr-vNMXw&oh=00_AfqRlNpl6IMuHdLngETzr7LyedRpksSOymvJ7Ahg9Fejdg&oe=696790B6",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/468838079_586424250454566_633206775257310479_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=No5b1VFjxH0Q7kNvwGilKkf&_nc_oc=AdmrECGUqOkvQ4DdVLkY1yeN_xmNCuvT23l948OyU9uWQxxVLUGhjIdgzJC4RrRvN-E&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=zZ16JCcl9_Qc-aMYFqtAbA&oh=00_AfquEVxPkJQ4qWis0hOaIfrg1WDYEcn_zen31x9QoxRE0A&oe=69677D92",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/472333679_609707494792908_8749746095787467661_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zpteIyaNbKEQ7kNvwFCfGxa&_nc_oc=Adn1fXtWep0d_-srYRk_QmhZXdTFZ2DtXwg8g_jUqkWT9thR1xunjm2qmmuPoj4oKNQ&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=IppqkvPW40AX2HTmcILIBQ&oh=00_AfpAXWjBzmvsmHNj446CSAXnlcjxqEU3tACa-FVg7kDVPw&oe=69678678",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/472053633_605545118542479_1322559186411168200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-OanT72XOf4Q7kNvwGLS4zb&_nc_oc=AdmYFY160Nv_O2SFnG6MVf_k_rsOqMd3VUVY8wLYHFZJftNlKvHxjqj79GemboL75iE&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=Mtkl32DkR7SnfvS2K3EqNQ&oh=00_AfoDYqNqbZdLl-cxme4_OJvzQUQSxunqRQmDJA_Eh1qTAg&oe=6967A76B",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/471789839_605544811875843_3208707096438771761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vCgjGXzob-EQ7kNvwGErC-W&_nc_oc=AdkkSaCfTcPd4-I6kUgyPBlSrxg7QhnPbdVS8NyrEpS3wKzOMAnuO8ttrS4mHJpybrw&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=-36ZEbMB-XnYFpIM4MAdLQ&oh=00_Afq-SW9N4MF1tnbuMeUidcVhL-Kg1fPcVMgynOs3fXcFMg&oe=6967B3EC",
  "https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/468944368_586437700453221_2406293434798328284_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LBZpHm80OdMQ7kNvwGXc174&_nc_oc=Adlz__hlPqwErskozaxGXX7Y1eulOcUs0kCyYy-pfVPuGI1DIJaR2t4lbslC0lP8Dy8&_nc_zt=23&_nc_ht=scontent.fccu31-2.fna&_nc_gid=5NyYVdVrj-GC6HRmukunzg&oh=00_AfqWWvwBmHGtdQqFqHQKhAFJUp9MRu4hMQlwm7lmFXPYsg&oe=69678D6D",
  "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/468783210_586425707121087_2965048887819298571_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OVOwQJdKfs0Q7kNvwGIeh2r&_nc_oc=AdlQ9QGiM71yArsb3NZvGdOEEUbOb-K9gKE33NQ2WBjSzBu0biBKL0GYUuiKJRHypHM&_nc_zt=23&_nc_ht=scontent.fccu31-1.fna&_nc_gid=BTqzKak9a24VBuwbKKQpjg&oh=00_Afqtc9abPCKukxP4FCqsgfR2oFbA6hUr4RGs2k8rf-gUaw&oe=6967B3CA"
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(images.map(() => false));

  // Preload images
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded((prev) => {
          const newArr = [...prev];
          newArr[i] = true;
          return newArr;
        });
      };
    });
  }, []);

  // Slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2s per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence>
        {images.map(
          (img, i) =>
            i === index && loaded[i] && (
              <motion.img
                key={i}
                src={img}
                alt={`Portfolio ${i + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
        )}
      </AnimatePresence>
    </div>
  );
}
