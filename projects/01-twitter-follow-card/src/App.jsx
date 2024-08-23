import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {

  const users = [
    { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true },
    { userName: 'pheralb', name: 'Pablo Hernández', isFollowing: true  },
    { userName: 'elonmusk', name: 'Elon Musk', isFollowing: true  },
    { userName: 'nasa', name: 'NASA', isFollowing: true  },
  ];

  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            isFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }

    </section>
    )
}
