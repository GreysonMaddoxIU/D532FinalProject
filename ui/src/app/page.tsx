import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./pages/Home'), { ssr: false });

export default function App() {
  return (
    <Home />
  )
}
