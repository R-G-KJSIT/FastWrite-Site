import React, { useEffect, useState } from 'react';

const ReleaseNotes = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/r-g-kjsit/FastWrite/commits'
        );
        const data = await response.json();
        setCommits(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching commits:', error);
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Release Notes</h1>
        {loading ? (
          <p className="text-gray-400">Loading commits...</p>
        ) : (
          <ul className="space-y-6">
            {commits.map((commit: any, index: number) => (
              <li key={index} className="border-b border-gray-800 pb-4">
                <p className="text-lg font-semibold text-fastwrite-400">
                  {commit.commit.message}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(commit.commit.author.date).toLocaleDateString()} by{' '}
                  <span className="text-white">{commit.commit.author.name}</span>
                </p>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fastwrite-400 hover:underline"
                >
                  View Commit
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReleaseNotes;