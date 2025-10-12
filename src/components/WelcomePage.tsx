import "../App.css";

type WelcomePageProps = {
  onGetStarted: () => void;
};

const WelcomePage = ({ onGetStarted }: WelcomePageProps) => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#1a0d0d]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-9"
        style={{
          backgroundImage: "url('src/assets/images/bg.jpg')",
        }}
      ></div>
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


      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-bounce mb-8">
          Welcome to My Portfolio
        </h1>

        <button
          onClick={onGetStarted}
          className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300 shadow-lg font-semibold"
        >
          See What I Do
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
