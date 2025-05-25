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
          title: "Villa in Coorg",
          description:
            "Sitting next to a river in the heart of Coorg is a classic 6-bedroom villa. It certainly is designed to standout in style, but also made sure that the design is not overwhelming. The villa is designed in response to the climate of the place and while the architecture style is asked for by the client. The design is a blend of the client's interests and a response to the local climate. ",
          area: "4670 sq. ft.",
          type: "Brick Masonry",
          style: "Classic European Architecture",
          location: "Location - Coorg",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039685/01_1_al9tzj.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039692/02_1_mvljnl.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039681/03_1_upvemp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039675/04_vx9bmx.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039670/05_2_pxd5hn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039661/06_tvg8gc.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039667/07_1_mqlxb0.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040021/08_1_uzqfgc.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040308/03_2_polnmv.jpg",
          title: "Guest House - Contemporary",
          description:
            "Located on the outskirts of Hyderabad, this 4-bedroom guesthouse is surrounded by lawns and tropical vegetation within a 1 acre site. The guesthouse flaunts the style of modern and minimalist architecture while floating within the landscape. The pavilion north of the structure, separated by a reflecting pool, is designed to function as a party deck for celebrations while being surrounded by sophisticated lawns tropical vegetation far from the busy city-life.",
          area: "7900 sq. ft.",
          type: "Brick Masonry",
          style: "Minimalist Architecture",
          location: "Hyderabad",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040293/01_2_u1bafk.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040285/02_2_qg1d97.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040308/03_2_polnmv.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040552/04_1_ynox3i.jpg",
          title: "Guest House - Vernacular",
          description:
            "Located on the outskirts of Hyderabad, this 4-bedroom guesthouse is surrounded by lush green tropical vegetation within a 1 acre site. The guesthouse flaunts the style of vernacular architecture and its interaction with the surroundings. Designed in Manduva style, the guesthouse welcomes rain, breeze, sunlight, nature and people alike. The central area is designed to act as a venue for celebrations and parties. The pavilion north of the structure, separated by a lotus pond, is designed to function as a dining space during celebrations while being surrounded by lush green tropical ornamental plants and fruit-bearing trees far from the busy city-life.",
          area: "8080 sq. ft.",
          type: "Brick Masonry",
          style: "Indian Vernacular Architecture: Manduva Logili",
          location: "Hyderabad",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040562/01_3_smdiyi.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040547/02_3_ahgwm5.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040558/03_3_swyd0w.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040552/04_1_ynox3i.jpg",
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
          location: "Location - Mukinada",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039005/01_ultuwn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748038753/02_isi48i.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039240/03_jyiqiw.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039095/05_1_wiuojq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147030/06_3_fal8x6.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039252/07_v1bv2j.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039039/08_boxvwn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039163/09_1_oynbot.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748039254/10_tbzk7i.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040955/02_t3kxlm.png",
          title: "Residence",
          description:
            "Villa design for a family of four, located in a peaceful residential colony in Rajahmundry. Designed with double-height balconies for green areas and folded plate staircase defining the style. Light colours are chosen to complement both the architectural style and the lifestyle of the family.",
          area: "34940 sq. ft.",
          type: "Brick Masonry",
          style: "Contemporary Architecture",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040956/01_pgzhoz.png",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040955/02_t3kxlm.png",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040958/03_mzsn07.png",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040957/04_r5daz2.png",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041244/View_1_30-11-2022_jy9iyv.jpg",
          title: "Skywalk in GSL Hospital",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041244/View_1_30-11-2022_jy9iyv.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041248/View_2_30-11-2022_yb829t.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041255/View_3_30-11-2022_hjhjf9.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041260/View_4_30-11-2022_mueejq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041265/View_5_30-11-2022_qwfkqb.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041604/02_4_xlzwog.jpg",
          title: "Godavari Neuro Hospital",
          type: "Hospital Renovation",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041583/01_4_wbdyk7.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748041604/02_4_xlzwog.jpg",
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
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748040552/04_1_ynox3i.jpg",
          title: "Guest House - Vernacular",
          description:
            "Located on the outskirts of Hyderabad, this 4-bedroom guesthouse is surrounded by lush green tropical vegetation within a 1 acre site. The guesthouse flaunts the style of vernacular architecture and its interaction with the surroundings. Designed in Manduva style, the guesthouse welcomes rain, breeze, sunlight, nature and people alike. The central area is designed to act as a venue for celebrations and parties. The pavilion north of the structure, separated by a lotus pond, is designed to function as a dining space during celebrations while being surrounded by lush green tropical ornamental plants and fruit-bearing trees far from the busy city-life.",
          area: "8080 sq. ft.",
          type: "Brick Masonry",
          style: "Indian Vernacular Architecture: Manduva Logili",
          location: "Hyderabad",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148402/01_6_otgndi.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148407/02_6_hmyjsu.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148412/03_5_sarbu9.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148417/04_3_k3afrv.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148421/05_5_aoy9iz.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148432/06_4_gytcti.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148437/07_5_meej1w.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148442/08_4_ekpyzg.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148446/09_4_k777wr.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148427/10_3_s52qgj.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148450/12_1_fzqetv.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148456/13_1_afrepx.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148461/14_1_qowany.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063739/03_ddaw81.jpg",
          title: "Residence",
          //   description: "Interconnected walkways using natural stone and timber",
          //   area: "800 linear ft",
          //   type: "Hardscape",
          //   style: "Rustic",s
          location: "Visakhapatnam",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063769/01_kmedwd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063740/02_xq9wtf.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063739/03_ddaw81.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063738/04_pg0akp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063737/05_c0rcta.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063737/06_wqdwew.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063736/07_rpwlaw.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063737/08_s0jxan.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063736/09_kizre6.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748063735/10_wdabsf.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/06_g9kfbk.jpg",
          title: "Landscape",
          //   description:
          // "Custom pond and fountain installations with aquatic plants",
          //   area: "300 sq ft",
          //   type: "Water Feature",
          //   style: "Contemporary",
          location: "Bobbillanka",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074584/01_s5bern.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/02_ivqpus.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/03_o5prle.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/05_ytg7hz.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/06_g9kfbk.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/07_lwnrhq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748074581/08_pbzo5k.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075192/07_3_xab1zt.jpg",
          title: "Community Park",
          //   description:
          // "Custom pond and fountain installations with aquatic plants",
          //   area: "300 sq ft",
          //   type: "Water Feature",
          //   style: "Contemporary",
          location: "Jaggampeta",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075939/01_5_d4ptb4.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075935/02_5_ktvpac.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075194/03_4_vs9kuv.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075194/04_2_qw8ao4.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075942/05_4_nwhdyn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075209/06_2_dt2qj8.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748075192/07_3_xab1zt.jpg",
          ],
        },
      ],
    },
  },
  interior: {
    type: "Interior",
    dayImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748061897/02_nfctll.jpg",
    nightImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1748061989/21_lw2wuj.webp",
    title: "Interior Project",
    description: "This is a detailed description of our interior project...",
    images: {
      thumbnails: [
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061078/08_jepeoh.jpg",
          title: "7BHK Apartment",
          //   description:
          // "Chef's kitchen with premium appliances and custom cabinetry",
          //   area: "320 sq ft",
          //   type: "Kitchen",
          //   style: "Modern",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061066/01_v3eb6d.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061066/02_uem4hq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061068/03_yuyb87.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061069/04_dkz3mx.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061071/05_aik9ni.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061073/06_isqrf9.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061076/07_luhono.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061078/08_jepeoh.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061113/09_puaoph.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061115/10_d3u21x.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061117/11_xmytlv.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060265/01_b2p9g7.jpg",
          title: "4BHK Apartment",
          //   description:
          //     "Open concept living space with modern furnishings and natural light",
          //   area: "450 sq ft",
          //   type: "Interior Design",
          //   style: "Contemporary",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060265/01_b2p9g7.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060265/02_pm3387.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060268/03_ordmzs.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060268/04_xy7ijc.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060270/05_nw7qrh.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060292/06_ycrz8a.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060294/07_vsfq9s.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060296/08_bc9i63.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060298/09_u4ijxe.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060299/10_m1jbss.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060301/11_g4ykpj.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060303/12_etx7rj.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060304/13_hmvi0m.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060305/14_felpuq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060308/15_nhchbq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060311/16_p8jpum.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060311/17_yehfda.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060313/18_jlsk7k.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748060316/19_auutvy.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061986/19_on4z8r.webp",
          title: "Dr. Sahitya's Dermacure: Clinic",
          //   description:
          // "Luxury bathroom with marble finishes and spa-like amenities",
          //   area: "150 sq ft",
          //   type: "Bathroom",
          //   style: "Luxury",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061895/01_nzvbfr.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061897/02_nfctll.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061898/03_nkccdq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061901/04_csxncp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061904/05_ktohmn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061946/06_mvymnp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061974/07_duxxar.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148084/09_3_nrupwn.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148085/10_2_madhek.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148092/11_1_hrmgjd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148095/12_cro8r7.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148093/13_pfbblf.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148100/14_yzp5wa.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148101/15_r1ch90.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148102/16_csmh9t.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148105/17_z7iaki.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748148109/18_aejuoc.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061986/19_on4z8r.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061987/20_g55x8b.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061989/21_lw2wuj.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061992/23_uwxya6.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061994/24_hzrtbu.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061996/25_vh0dhz.webp",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061618/13_ctblgy.webp",
          title: "Dr. Rajesh Clinic",
          //   description: "Serene bedroom retreat with walk-in closet and ensuite",
          //   area: "280 sq ft",
          //   type: "Bedroom",
          //   style: "Minimalist",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061665/01_d4svkw.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061663/02_c1ftob.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061660/03_xztzc1.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061639/04_rxo5b6.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061637/05_wdbpq3.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061635/06_zorh6m.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147856/07_4_wjfcdo.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147858/08_3_apucwz.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147863/09_2_tix1yq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147865/10_1_as1vfz.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748147868/11_xknnfz.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061620/12_tgcds2.webp",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748061618/13_ctblgy.webp",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062623/02_eggj2t.jpg",
          title: "Office interiors",
          //   description: "Serene bedroom retreat with walk-in closet and ensuite",
          //   area: "280 sq ft",
          //   type: "Bedroom",
          //   style: "Minimalist",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062624/01_vw4wwp.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062623/02_eggj2t.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062621/03_d9b1cs.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062617/04_tfzyaq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062616/05_jfxu4m.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062615/06_yt9lwr.jpg",
          ],
        },
        {
          image:
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062926/02_f639wq.jpg",
          title: "TV Unit Remodelling",
          //   description: "Serene bedroom retreat with walk-in closet and ensuite",
          //   area: "280 sq ft",
          //   type: "Bedroom",
          //   style: "Minimalist",
          location: "Rajahmundry",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062969/01_x50zxa.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062926/02_f639wq.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1748062924/03_cnrhmz.jpg",
          ],
        },
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
