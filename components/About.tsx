function About({ aboutMe }: any) {
  return (
    <div className="flex justify-center px-6">
      <h3 className="font-medium text-lg text-white w-5/12 text-center">{aboutMe}</h3>
    </div>
  );
}

export default About;
