import "../App.css";


type WelcomePageProps = {
  onGetStarted: () => void;
};

const WelcomePage = ({ onGetStarted }: WelcomePageProps) => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#1a0d0d]"
    >
   
<video
  className="absolute inset-0 w-full h-full object-cover opacity-50"
  autoPlay
  loop
  muted
>
  <source src="src/assets/images/welcome.mp4" type="video/mp4" />

</video>

<div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

<div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full blur-sm opacity-80 animate-float-slow"></div>
<div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full blur-sm opacity-80 animate-float-fast"></div>
<div className="absolute top-8 right-20 w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-90 animate-float"></div>
<div className="absolute top-24 right-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full blur-sm opacity-70 animate-float"></div>
<div className="absolute top-32 left-1/2 w-1 h-1 bg-white rounded-full blur-sm opacity-90 animate-float twinkle"></div>

<div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-indigo-400 rounded-full blur-sm opacity-90 animate-float"></div>
<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-200 rounded-full blur-sm opacity-80 animate-float-fast"></div>
<div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full blur-sm opacity-70 animate-float-slow twinkle"></div>
<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300 rounded-full blur-sm opacity-90 animate-float"></div>

<div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-200 rounded-full blur-sm opacity-90 animate-float-fast"></div>
<div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-white rounded-full blur-sm opacity-80 animate-float twinkle"></div>
<div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-indigo-400 rounded-full blur-sm opacity-90 animate-float"></div>
<div className="absolute bottom-24 right-1/4 w-2 h-2 bg-purple-200 rounded-full blur-sm opacity-80 animate-float-fast"></div>
<div className="absolute bottom-16 left-1/2 w-1.5 h-1.5 bg-white rounded-full blur-sm opacity-90 animate-float-slow twinkle"></div>

<div className="absolute top-40 left-1/5 w-1 h-1 bg-white rounded-full blur-[1px] opacity-70 animate-float-fast"></div>
<div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px] opacity-80 animate-float"></div>
<div className="absolute top-1/4 right-1/5 w-1 h-1 bg-indigo-300 rounded-full blur-[1px] opacity-80 animate-float-slow"></div>
<div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-purple-400 rounded-full blur-[1px] opacity-90 animate-float-fast twinkle"></div>
<div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full blur-[1px] opacity-85 animate-float-slow"></div>


      <div className="relative z-10 flex flex-col items-center justify-center text-gray-100">
       <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins tracking-wide leading-tight animate-gradient-text mb-20 text-white"
>
  Exploring the Art of Creation
</h1>



        <button
  onClick={onGetStarted}
  className="
    px-4 sm:px-6 md:px-8 py-2 sm:py-3
    border border-indigo-400 text-white font-semibold rounded-2xl
    shadow-md transition-all duration-500 ease-in-out
    hover:bg-indigo-400 hover:opacity-15 hover:text-indigo-950 hover:shadow-lg hover:scale-105
    active:scale-95
    text-sm sm:text-base md:text-lg
  "
>
  See What I Do
</button>

      </div>
    </div>
  );
};

export default WelcomePage;
