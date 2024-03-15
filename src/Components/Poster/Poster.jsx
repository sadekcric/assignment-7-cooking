

const Poster = () => {






  return (
    <div className="lg:w-4/5 mx-auto p-2 mb-24">
      <div className="poster">

        <div className="flex flex-col justify-center items-center min-h-[600px] lg:min-h-[650px] text-white text-center space-y-7 p-3">


          <h1 className="text-3xl lg:text-6xl font-bold leading-tight lg:leading-relaxed lg:w-3/4 lg:mx-auto">Discover an exceptional cooking class tailored for you!</h1>

          <p className="text-lg lg:w-4/5">
          Recipe calories are vital for maintaining a healthy diet. By understanding the caloric content of ingredients, one can make informed choices, ensuring both delicious meals and balanced nutrition.
          </p>

          <div className="text-center">
            <button className="mr-5 px-6 py-3 bg-[#0BE58A] rounded-full text-black font-semibold hover:bg-slate-200">
            Explore Now
            </button>

            <button className=" px-6 py-3 border border-white rounded-full font-semibold hover:bg-slate-500">
            Our Feedback
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Poster;