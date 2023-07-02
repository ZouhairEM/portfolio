function BioBlock() {
  return (
    <div>
      <h5 className="text-sm text-tertiary">Hi, my name is</h5>
      <h1 className="font-bold text-6xl sm:text-8xl text-white">Zouhair</h1>
      <h2 className="font-bold text-5xl sm:text-7xl text-white">El-Mariami</h2>
      <h3 className="font-medium text-2xl text-white my-10 sm:my-5">
        <span>A</span>
        <span className="text-tertiary mx-1">frontend developer</span>
        <span className="block sm:inline">
          who works mostly with Vue and React
        </span>
      </h3>
    </div>
  );
}

export default BioBlock;
