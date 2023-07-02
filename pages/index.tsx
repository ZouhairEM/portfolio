import BioBlock from '../components/BioBlock';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto">
        <div className="text-center sm:text-left">
          <BioBlock />
        </div>
        <Image
          src="/me.jpeg"
          width={500}
          height={500}
          className="w-40 rounded-full shadow-inner opacity-80 ml-0 md:ml-20"
          alt="Zouhair El-Mariami"
        />
      </section>
    </main>
  );
}
