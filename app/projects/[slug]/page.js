// app/projects/[slug]/page.js
import ProjectPage from "@/app/components/ProjectPage";

const projectsData = {
  architecture: {
    type: "Architecture",
    dayImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748038371/West_01_final_1_gkbpvm.png",
    nightImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748038135/West_02_final_1_q3l1ma.png",
    title: "Architecture Project",
    description:
      "This is a detailed description of our architecture project...",
    images: {
      thumbnails: [
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039685/01_1_al9tzj.jpg",
          title: "Classic European Architecture",
          description:
            "Sitting next to a river in the heart of Coorg is a classic 6-bedroom villa. It certainly is designed to standout in style, but also made sure that the design is not overwhelming. The villa is designed in response to the climate of the place and while the architecture style is asked for by the client. The design is a blend of the client's interests and a response to the local climate. ",
          area: "4670 sq. ft.",
          type: "Brick Masonry",
          style: "Classic European Architecture",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039670/05_2_pxd5hn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039661/06_tvg8gc.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039667/07_1_mqlxb0.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039675/04_vx9bmx.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040021/08_1_uzqfgc.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039681/03_1_upvemp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039692/02_1_mvljnl.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040308/03_2_polnmv.jpg",
          title: "Guest House",
          description:
            "Located on the outskirts of Hyderabad, this 4-bedroom guesthouse is surrounded by lawns and tropical vegetation within a 1 acre site. The guesthouse flaunts the style of modern and minimalist architecture while floating within the landscape. The pavilion north of the structure, separated by a reflecting pool, is designed to function as a party deck for celebrations while being surrounded by sophisticated lawns tropical vegetation far from the busy city-life.",
          area: "7900 sq. ft.",
          type: "Brick Masonry",
          style: "Minimalist Architecture",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040285/02_2_qg1d97.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040285/02_2_qg1d97.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040552/04_1_ynox3i.jpg",
          title: "Guest House",
          description:
            "Located on the outskirts of Hyderabad, this 4-bedroom guesthouse is surrounded by lush green tropical vegetation within a 1 acre site. The guesthouse flaunts the style of vernacular architecture and its interaction with the surroundings. Designed in Manduva style, the guesthouse welcomes rain, breeze, sunlight, nature and people alike. The central area is designed to act as a venue for celebrations and parties. The pavilion north of the structure, separated by a lotus pond, is designed to function as a dining space during celebrations while being surrounded by lush green tropical ornamental plants and fruit-bearing trees far from the busy city-life.",
          area: "8080 sq. ft.",
          type: "Brick Masonry",
          style: "Indian Vernacular Architecture: Manduva Logili",
          location: "Hyderabad",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040562/01_3_smdiyi.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040558/03_3_swyd0w.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040547/02_3_ahgwm5.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040543/05_3_hirstw.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040539/06_1_hy5eex.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040535/07_2_trqq6v.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040527/08_2_yudbtz.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748038753/02_isi48i.jpg",
          title: "The Sai Baba temple",
          description:
            "The Sai Baba temple, placed itself facing North, at the entrance of Mukkinada village. Small yet divine, the temple gracefully sits amidst the village residences, creating a positive aura in its surroundings. The architectural style chosen is very minimal for temple architecture and the colours are kept subtle to make sure the attention of the devotees is focused only on worship and prayers.",
          area: "486 sq. ft.",
          type: "Brick Masonry",
          style: "Indian Temple Architecture",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039039/08_boxvwn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039005/01_ultuwn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039095/05_1_wiuojq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039240/03_jyiqiw.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039163/09_1_oynbot.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039252/07_v1bv2j.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039254/10_tbzk7i.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040955/02_t3kxlm.png",
          title: "Villa",
          description:
            "Villa design for a family of four, located in a peaceful residential colony in Rajahmundry. Designed with double-height balconies for green areas and folded plate staircase defining the style. Light colours are chosen to complement both the architectural style and the lifestyle of the family.",
          area: "34940 sq. ft.",
          type: "Brick Masonry",
          style: "Contemporary Architecture",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040958/03_mzsn07.png",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040957/04_r5daz2.png",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040956/01_pgzhoz.png",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041244/View_1_30-11-2022_jy9iyv.jpg",
          title: "Sky Walk",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041255/View_3_30-11-2022_hjhjf9.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041248/View_2_30-11-2022_yb829t.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041265/View_5_30-11-2022_qwfkqb.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041260/View_4_30-11-2022_mueejq.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041604/02_4_xlzwog.jpg",
          title: "Hospital",
          type: "Renovation",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041583/01_4_wbdyk7.jpg",
          ],
        },
      ],
      //   galleries: [
      //     [
      //       "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
      //       "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
      //       "/images/arch-gallery-1-3.jpg",
      //       "/images/arch-gallery-1-4.jpg",
      //     ],
      //     [
      //       "/images/arch-gallery-2-1.jpg",
      //       "/images/arch-gallery-2-2.jpg",
      //       "/images/arch-gallery-2-3.jpg",
      //     ],
      //     [
      //       "/images/arch-gallery-3-1.jpg",
      //       "/images/arch-gallery-3-2.jpg",
      //       "/images/arch-gallery-3-3.jpg",
      //       "/images/arch-gallery-3-4.jpg",
      //       "/images/arch-gallery-3-5.jpg",
      //     ],
      //     ["/images/arch-gallery-4-1.jpg", "/images/arch-gallery-4-2.jpg"],
      //   ],
    },
  },
  landscape: {
    type: "Landscape",
    dayImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748038359/East_Feature_Wall_j5u12o.jpg",
    nightImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748038148/East_Feature_Wall_Dawn_cemrdy.jpg",
    title: "Landscape Project",
    description: "This is a detailed description of our landscape project...",
    images: {
      thumbnails: [
        {
          image: "/images/landscape-thumb-1.jpg",
          title: "Garden Design",
          description:
            "Sustainable landscaping with native plants and water features",
          area: "5,000 sq ft",
          type: "Garden",
          style: "Natural",
          location: "Backyard",
        },
        {
          image: "/images/landscape-thumb-2.jpg",
          title: "Pathway Systems",
          description: "Interconnected walkways using natural stone and timber",
          area: "800 linear ft",
          type: "Hardscape",
          style: "Rustic",
          location: "Throughout Property",
        },
        {
          image: "/images/landscape-thumb-3.jpg",
          title: "Water Features",
          description:
            "Custom pond and fountain installations with aquatic plants",
          area: "300 sq ft",
          type: "Water Feature",
          style: "Contemporary",
          location: "Central Courtyard",
        },
      ],
      galleries: [
        [
          "/images/landscape-gallery-1-1.jpg",
          "/images/landscape-gallery-1-2.jpg",
          "/images/landscape-gallery-1-3.jpg",
        ],
        [
          "/images/landscape-gallery-2-1.jpg",
          "/images/landscape-gallery-2-2.jpg",
          "/images/landscape-gallery-2-3.jpg",
          "/images/landscape-gallery-2-4.jpg",
        ],
        [
          "/images/landscape-gallery-3-1.jpg",
          "/images/landscape-gallery-3-2.jpg",
        ],
      ],
    },
  },
  interior: {
    type: "Interior",
    dayImage: "/images/interior-day.jpg",
    nightImage: "/images/interior-night.jpg",
    title: "Interior Project",
    description: "This is a detailed description of our interior project...",
    images: {
      thumbnails: [
        {
          image: "/images/interior-thumb-1.jpg",
          title: "Living Room",
          description:
            "Open concept living space with modern furnishings and natural light",
          area: "450 sq ft",
          type: "Living Space",
          style: "Contemporary",
          location: "Main Floor",
        },
        {
          image: "/images/interior-thumb-2.jpg",
          title: "Kitchen Design",
          description:
            "Chef's kitchen with premium appliances and custom cabinetry",
          area: "320 sq ft",
          type: "Kitchen",
          style: "Modern",
          location: "Main Floor",
        },
        {
          image: "/images/interior-thumb-3.jpg",
          title: "Master Bedroom",
          description: "Serene bedroom retreat with walk-in closet and ensuite",
          area: "280 sq ft",
          type: "Bedroom",
          style: "Minimalist",
          location: "Second Floor",
        },
        {
          image: "/images/interior-thumb-4.jpg",
          title: "Bathroom Suite",
          description:
            "Luxury bathroom with marble finishes and spa-like amenities",
          area: "150 sq ft",
          type: "Bathroom",
          style: "Luxury",
          location: "Second Floor",
        },
      ],
      galleries: [
        [
          "/images/interior-gallery-1-1.jpg",
          "/images/interior-gallery-1-2.jpg",
          "/images/interior-gallery-1-3.jpg",
        ],
        [
          "/images/interior-gallery-2-1.jpg",
          "/images/interior-gallery-2-2.jpg",
          "/images/interior-gallery-2-3.jpg",
          "/images/interior-gallery-2-4.jpg",
        ],
        [
          "/images/interior-gallery-3-1.jpg",
          "/images/interior-gallery-3-2.jpg",
        ],
        [
          "/images/interior-gallery-4-1.jpg",
          "/images/interior-gallery-4-2.jpg",
          "/images/interior-gallery-4-3.jpg",
        ],
      ],
    },
  },
};

export default function Page({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage {...project} />;
}
