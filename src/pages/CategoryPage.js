import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryDetail from '../components/CategoryDetail';

// Map slug -> data (you should replace with real images in /public or /src/images)
const DATA = {
  'web-developer': {
    title: 'Web Developer',
    carousel: [
      { src: '/images/dev-app.png', caption: 'Responsive build', text: 'A modern responsive site.' },
      { src: '/images/dev-app-m.png', caption: 'Mobile first', text: 'Optimized for mobile.' },
      { src: '/images/dev-app.png', caption: 'Accessibility', text: 'Accessible components.' },
      { src: '/images/dev-app.png', caption: 'Performance', text: 'Fast loading.' },
    ],
    collage: ['/images/dev-app.png','/images/dev-app-m.png','/images/dev-app.png','/images/dev-app.png','/images/dev-app-m.png']
  },
  'ux-designer': {
    title: 'UX Designer',
    carousel: [
      { src: '/images/ux-designer.png', caption: 'User flows', text: 'Designing clear flows.' },
      { src: '/images/ux-designer-m.png', caption: 'Wireframes', text: 'Low fidelity wireframes.' },
      { src: '/images/ux-designer.png', caption: 'Prototypes', text: 'Interactive prototypes.' },
      { src: '/images/ux-designer.png', caption: 'Research', text: 'User research highlights.' },
    ],
    collage: ['/images/ux-designer.png','/images/ux-designer-m.png','/images/ux-designer.png','/images/ux-designer.png','/images/ux-designer-m.png']
  },
  'bubble-io-developer': {
    title: 'Bubble.io Developer',
    carousel: [
      { src: '/images/bubble-app.png', caption: 'App logic', text: 'No-code app builds.' },
      { src: '/images/bubble-app.png', caption: 'Integrations', text: 'API-driven features.' },
      { src: '/images/bubble-app.png', caption: 'Workflows', text: 'Business workflows.' },
      { src: '/images/bubble-app.png', caption: 'Deployment', text: 'Deployed apps.' },
    ],
    collage: ['/images/bubble-app.png','/images/bubble-app.png','/images/bubble-app.png','/images/bubble-app.png','/images/bubble-app.png']
  }
};

const CategoryPage = () => {
  const { slug } = useParams();
  const data = DATA[slug];

  if (!data) {
    return (
      <main style={{ padding: '2rem' }}>
        <h2>Category not found</h2>
        <p>Try the homepage categories.</p>
      </main>
    );
  }

  return (
    <main>
      <CategoryDetail title={data.title} carouselItems={data.carousel} collageItems={data.collage} />
    </main>
  );
};

export default CategoryPage;
