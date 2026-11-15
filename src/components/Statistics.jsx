// components/Statistics.jsx

import React from 'react';

const GITHUB_USER = 'MrPK4699';

// ratio = the card image's natural width / height (streak: 495x195, summary cards: 340x200).
// Used as flex-grow so cards in the same row get equal heights.
const statCards = [
  {
    id: 'github-streak-stats',
    src: `https://streak-stats.demolab.com/?user=${GITHUB_USER}`,
    alt: `${GITHUB_USER} github streak stats`,
    ratio: 495 / 195,
    minW: '300px',
    maxW: '560px',
  },
  {
    id: 'github-stats-card',
    src: `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${GITHUB_USER}&theme=default`,
    alt: `${GITHUB_USER} github stats`,
    ratio: 340 / 200,
    minW: '240px',
    maxW: '380px',
  },
  {
    id: 'github-top-langs',
    src: `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${GITHUB_USER}&theme=default`,
    alt: `${GITHUB_USER} top languages`,
    ratio: 340 / 200,
    minW: '240px',
    maxW: '380px',
  },
];

const Statistics = () => (
  <section className="page-section" id="statistics">
    <div className="container px-4 px-lg-5">
      <h2 className="text-center mt-0">Github Stats</h2>
      <hr className="divider" />

      <div id="githubCommits" className="row">
        <div className="react-activity-calendar my-2 shadow-lg">
          <img style={{ width: '100%', margin: 'auto' }} src={`https://ghchart.rshah.org/${GITHUB_USER}`} alt="Github contribution chart" loading="lazy" />
        </div>

        <div className="github-stats">
          {statCards.map(({ id, src, alt, ratio, minW, maxW }) => (
            <div
              key={id}
              className="github-stat-card shadow-lg"
              style={{ '--ratio': ratio, '--min-w': minW, '--max-w': maxW }}
            >
              <img id={id} src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Statistics;
