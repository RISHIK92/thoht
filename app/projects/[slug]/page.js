// app/projects/[slug]/page.js
import ProjectPage from "@/app/components/ProjectPage";

const projectsData = {
  architecture: {
    type: "Architecture",
    dayImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
    nightImage:
      "https://res.cloudinary.com/df622sxkk/image/upload/v1746460143/samples/coffee.jpg",
    title: "Architecture Project",
    description:
      "This is a detailed description of our architecture project...",
    images: {
      thumbnails: [
        {
          image: "/images/arch-thumb-2.jpg",
          title: "Modern Exterior",
          description:
            "Contemporary facade design with clean lines and sustainable materials",
          area: "2,500 sq ft",
          type: "Residential",
          style: "Modern",
          location: "Downtown District",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-2.jpg",
          title: "Interior Spaces",
          description:
            "Open-plan living areas with natural lighting and minimalist design",
          area: "1,800 sq ft",
          type: "Interior",
          style: "Minimalist",
          location: "Main Floor",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-3.jpg",
          title: "Structural Details",
          description:
            "Innovative structural elements and material connections",
          area: "Various",
          type: "Details",
          style: "Contemporary",
          location: "Throughout",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-4.jpg",
          title: "Floor Plans",
          description:
            "Detailed architectural drawings and layout specifications",
          area: "3,200 sq ft total",
          type: "Documentation",
          style: "Technical",
          location: "All Levels",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-4.jpg",
          title: "Floor Plans",
          description:
            "Detailed architectural drawings and layout specifications",
          area: "3,200 sq ft total",
          type: "Documentation",
          style: "Technical",
          location: "All Levels",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-4.jpg",
          title: "Floor Plans",
          description:
            "Detailed architectural drawings and layout specifications",
          area: "3,200 sq ft total",
          type: "Documentation",
          style: "Technical",
          location: "All Levels",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
          ],
        },
        {
          image: "/images/arch-thumb-4.jpg",
          title: "Floor Plans",
          description:
            "Detailed architectural drawings and layout specifications",
          area: "3,200 sq ft total",
          type: "Documentation",
          style: "Technical",
          location: "All Levels",
          galleries: [
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
            "/images/arch-gallery-1-3.jpg",
            "/images/arch-gallery-1-4.jpg",
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
    dayImage: "/images/landscape-day.jpg",
    nightImage: "/images/landscape-night.jpg",
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
